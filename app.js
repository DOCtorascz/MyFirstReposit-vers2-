import pkg from 'pg';
import express from 'express';
import path from 'path';

const dirname = path.resolve();

const app = express();
const port = process.env.PORT || 5501;

app.use(express.static(path.resolve(dirname, 'public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const { Pool, Client } = pkg;
const connectionString = 'postgres://twitter_production_x6ag_user:ucxxPWmNTUve1Sg91oXF89qYbVNJ21EO@dpg-chqrnne7avjb90n96u6g-a.oregon-postgres.render.com/twitter_production_x6ag?ssl=true';

const pool = new Pool({
  connectionString,
});

await pool.end();

const client = new Client({
  connectionString,
});

await client.connect();

// await client.query('ALTER TABLE mess DROP COLUMN mess_id');
// await client.query('DELETE FROM mess WHERE mess_id=5');
// await client.query('ALTER TABLE mess ADD COLUMN imgUrl text');

const objSelect = await client.query('SELECT *FROM mess');
// Дополнительная таблица для регистраций
const objSelect2 = await client.query('SELECT *FROM account');

await client.query('SELECT NOW() as now');

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(dirname, 'public', 'index.html'));
});

app.get('/posts.json', (req, res) => {
  res.type('json').send(objSelect.rows);
});

// POST запрос на добавление месседжа
app.post('/posts.json', async (req, res) => {
  const {
    comment,
  } = req.body;

  const postStr = ` 
  '${comment}'`;

  const post = await client.query(`INSERT INTO mess (comment) VALUES (${postStr})`);

  res.json(post);
});

// DELETE запрос на удаление месседжа
app.delete('/posts.json', async (req, res) => {
  const post = await client.query(`DELETE FROM mess WHERE mess_id=${req.body.id}`);
  res.json(post);
});

// PUT запрос на изменение месседжа
app.put('/posts.json', async (req, res) => {
  const { commentNew, id } = req.body;
  const post = await client.query(`UPDATE mess SET comment = '${commentNew}' WHERE mess_id = ${id}`);
  res.json(post);
});

// Авторизация и получение пользователей
app.get('/account.json', (req, res) => {
  res.type('json').send(objSelect2.rows);
});

// Добавление пользователей
app.post('/account.json', async (req, res) => {
  const {
    LOGIN,
    PASSWORD,
    TOKEN,
  } = req.body;

  const postStr = ` 
  '${LOGIN}',
  '${PASSWORD}',
  '${TOKEN}'`;

  const post = await client.query(`INSERT INTO account (account_name, account_password, token) VALUES (${postStr})`);

  res.json(post);
});
// await client.end();

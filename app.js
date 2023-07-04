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
  const post = await client.query("INSERT INTO mess (mess_id, imgurl, nameperson, login, timeago, repost, likes, loaded, comment, imgrepost, imglike, imgloaded) OVERRIDING SYSTEM VALUE VALUES ('7', '1st Street', 'Los Angeles', 'Harry Monroe', 'USA', 'USA', 'USA', 'USA', 'USA', 'USA', 'USA', 'USA')");
  res.json(post);
});

// DELETE запрос на удаление месседжа
app.delete('/posts.json', async (req, res) => {
  const post = await client.query('DELETE FROM mess WHERE mess_id=7');
  res.json(post);
});

// PUT запрос на изменение месседжа
app.put('/posts.json', async (req, res) => {
  const post = await client.query('UPDATE mess SET nameperson = 155 WHERE mess_id = 7');
  res.json(post);
});
// await client.end();

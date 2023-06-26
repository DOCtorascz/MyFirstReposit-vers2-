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
// await client.query("INSERT INTO mess (mess_id, imgUrl, namePerson, login, timeAgo, repost, likes, loaded, comment, imgRepost, imgLike, imgLoaded) OVERRIDING SYSTEM VALUE VALUES ('4', 'img/imagei.jpg', 'Mia', '@mia', '2000', '21', '23', '9', 'Has anyone seen web3? I can’t find it.', 'img/Vector1.svg', 'img/Vector2.svg', 'img/Vector3.svg')")

const objSelect = await client.query('SELECT *FROM mess');

await client.query('SELECT NOW() as now');

app.get('/', (req, res) => {
  res.sendFile(path.resolve(dirname, 'public', 'index.html'));
});

app.get('/posts.json', (req, res) => {
  res.type('json').send(objSelect.rows);
});

await client.end();

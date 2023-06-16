// import pkg from 'pg';
import express from 'express';
import path from 'path';

const dirname = path.resolve();

const app = express();
const port = process.env.PORT || 5501;

app.use(express.static(path.resolve(dirname, 'public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// const { Pool, Client } = pkg;
// const connectionString = 'postgres://twitter_production_x6ag_user:ucxxPWmNTUve1Sg91oXF89qYbVNJ21EO@dpg-chqrnne7avjb90n96u6g-a.oregon-postgres.render.com/twitter_production_x6ag?ssl=true';

// const pool = new Pool({
//   connectionString,
// });

// await pool.end();

// const client = new Client({
//   connectionString,
// });

// await client.connect();

// const objSelect = await client.query('SELECT *FROM mess');

// await client.query('SELECT NOW() as now');

app.get('/', (req, res) => {
  res.sendFile(path.resolve(dirname, 'public', 'index.html'));
});

// app.get('/posts.json', (req, res) => {
//   res.type('json').send(objSelect.rows);
// });

// await client.end();

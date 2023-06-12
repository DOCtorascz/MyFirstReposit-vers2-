import pkg from 'pg';

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

const objSelect = await client.query('SELECT *FROM mess');

await client.query('SELECT NOW() as now');

const selectStr = JSON.stringify(objSelect.rows);
console.log(selectStr);

await client.end();

import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

function rowsToObjects(result) {
  return result.rows.map(row =>
    result.columns.reduce((obj, col, i) => {
      obj[col.name] = row[i];
      return obj;
    }, {})
  );
}

export async function getMeals() {
  const result = await db.execute('SELECT * FROM meals');
  return rowsToObjects(result);
}

export async function getMeal(slug) {
  const result = await db.execute('SELECT * FROM meals WHERE slug = ?', [slug]);
  const meals = rowsToObjects(result);
  return meals[0] || null;
}

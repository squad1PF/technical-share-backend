module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "migrations": ["./src/database/migrations/*.ts"],
  "entities": ["src/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  },
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  }
}
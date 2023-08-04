module.exports = {
    host: "localhost",
    user: "root",
    password: "",
    database: "emp_portal",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000, // Maximum time, in milliseconds, that a connection can be idle before being released
      idle: 10000,    // Maximum time, in milliseconds, that a connection can be idle before being closed
    }
  };
  
const env = process.env.NODE_ENV;

let MYSQL_CONF;

if (env === "dev") {
  MYSQL_CONF = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123",
    database: "myblog"
  };
}

if (env === "development") {
  MYSQL_CONF = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123",
    database: "myblog"
  };
}

module.exports = {
  MYSQL_CONF
};

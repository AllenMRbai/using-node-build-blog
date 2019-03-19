const redis = require("redis");

const redisClient = redis.createClient(6379, "192.168.72.129");
redisClient.on("error", err => {
  console.log(err);
});

redisClient.set("hello", "i am allen", redis.print);

redisClient.get("hello", (err, val) => {
  if (err) return console.log(err);
  console.log(val);

  redisClient.quit();
});

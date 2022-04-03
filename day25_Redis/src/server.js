const app = require("./index");
const connect = require("./configs/db");
app.listen(5500, async () => {
  try {
    await connect();
    console.log("listening port 5500....");
  } catch (error) {
    console.log("error:", error.message);
  }
});

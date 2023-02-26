import mongoose from "mongoose";
import  {logger}  from "../middlewares/index.middleware";
const connectionUrl = process.env.DATABASE_URL;
if (!connectionUrl) {
  throw new Error("Invalid connection url");
}

export default () => {
  mongoose.set("strictQuery", false),
    mongoose.connect(connectionUrl, (err) => {
      if (!err) {
        logger.info("Database connection was successful");
      } else {
        logger.error("There was an error connecting to database", err);
      }
    });
};

import roomTypeRouter from "./roomType.routers";
import roomRouter from "./room.routers";
import userRouter from "./users.router";

const basePath = '/api/v1';

export default (app: { use: (arg0: string, arg1: any) => void; }) => {
  app.use(`${basePath}/room-types`, roomTypeRouter);
  app.use(`${basePath}/rooms`, roomRouter);
  app.use(`${basePath}/users`, userRouter);
};

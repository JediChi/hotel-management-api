import {Request, Response, NextFunction } from "express";

const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user.roles !=="admin") {
       
      return res.status(403).send({
        success: false,
        data: `Acess denied, can only view`,
      });
    }
    next()

  } catch (error) {
    return res.status(500).send({ success: false, error: "Failed" });
  }
};

export default authorize;

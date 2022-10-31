import express from "express";
import APIController from "../controller/APIController";

let router = express.Router();

const initAPIRoute = (app) => {
  router.get('/user',APIController.getAllUser); // method GET -> read data
  router.post('/create-user',APIController.createNewUser); // method POST -> create DATA
  router.put('/update-user/',APIController.updateUser);// PUT -> update Data
  router.delete('/update-user/:id',APIController.deleteUser); // DELETE -> update Data
  return app.use('/api/v1/', router);
}

export default initAPIRoute;

import { Router } from "express";
import { weatherFromCoords, weatherFromLocation } from "../controller/weatherController";

const weatherRouter = Router();

weatherRouter.post('/coords', weatherFromCoords);
weatherRouter.post('/location', weatherFromLocation);

export default weatherRouter;
import { Router } from "express";
import { about, contact, galery, home, login } from "../controllers/controllers.home";

const rutaHome = Router();

rutaHome.get("/", home);
rutaHome.get("/contact", contact);
rutaHome.get("/login", login);
rutaHome.get("/", about);

export default rutaHome;

import { config } from "dotenv";
config();


export const home = (req, res) =>{
    // res.send("home");
    res.render("views.home.ejs");
}
export const contact = (req, res) =>{
    // res.send("contac");
    res.render("views.contac.ejs");
}
export const login = (req, res) =>{
    const url = process.env.BACK_URL;
    const options = {
        url: url
    };
    res.render("views.login.ejs", options);
}
export const about = (req, res) =>{
    res.send("about");
}
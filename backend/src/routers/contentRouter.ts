import express from "express"
import { addContent, deleteContent, getContent } from "../controllers/contentController.js";
const contentRouter = express.Router();
contentRouter.post("/", (req, res) => {
    addContent(req, res);
})
contentRouter.get("/", (req, res) => {
    getContent(req, res);
})
contentRouter.delete("/", (req, res) => {
    deleteContent(req, res);
})
export { contentRouter };
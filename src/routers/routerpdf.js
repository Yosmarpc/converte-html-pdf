/** @format */

import { Router } from "express";
import { convertHtmlpdf } from "../controllers/convertpdf.js";

const routerpdf = Router();

routerpdf.get("/convert-html-pdf", convertHtmlpdf);

export default routerpdf;

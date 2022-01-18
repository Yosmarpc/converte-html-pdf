const puppeteer = require('puppeteer');

const pathSave = 'src/dist/upload/';


export const convertHtmlpdf = async(req, res)=>{
    const url = req.body.url;
    const nameArchivo = req.body.name;
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setViewport({ width: 1024, height: 800 });
        await page.goto(url, { waitUntil: "networkidle2" }).catch(function () {
          console.log("Error while loading up the url.");
        });
        const pdf = await page
          .pdf({
            path: pathSave + nameArchivo + ".pdf",
            format: "letter",
            printBackground: true,
            margin: { top: 20, left: 20, right: 20, bottom: 0 },
          })
          .catch(function () {
            res.status(404)
            .json({
              message: "Error creating pdf",
              success: false,
            });
            console.log("Error creating pdf.");
          });
        browser.close();
        res.status(200)
        .json({
          success: true,
          message: "ATENCION SE HA CREADO EL PDF DE MANERA CORRECTA",
        });
        return pdf;
    } catch (error) {
        console.log("ERROR:", error.message);
    }

};


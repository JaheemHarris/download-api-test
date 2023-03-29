import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 3000;
const downloadUrl = '/pdf';
const fileDirectory = 'public'
const fileName = 'boruto.pdf';

app.use(cors());

app.get(downloadUrl, (req, res) => {
console.log("Call");
    const filePath = `${fileDirectory}/${fileName}`;
    const fileStream = fs.createReadStream(filePath);
    const stat = fs.statSync(filePath);
    
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=boruto.pdf');

    fileStream.pipe(res);
});

app.listen(port, () => {
    console.log(`Server runnig at port : ${port}`);
});
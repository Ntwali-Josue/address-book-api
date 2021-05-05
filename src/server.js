import express from 'express';
import bodyParser from 'body-parser';
import routes from "./routes/index";

const app = express();

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.json({
        "message": "Hi Josh"
    })
})

app.use(routes);

const port = process.env.port || 5000
app.listen(5000, () =>{
    console.log(`...running on port ${port}`)
})

import express from "express"
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.get('/', async function (req, res) {

});

app.get(`/api/insert`, async (req, res) => {
});

app.get(`/api/delete`, async (req, res) => {
});

app.get(`/api/update`, async (req, res) => {
});

app.listen(8080)

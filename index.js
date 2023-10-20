const express = require('express');
const cors = require('cors')
const app = express();
const axios = require('axios'); // Import the Axios library

app.use(cors());
app.use(express.json());


const dotenv = require('dotenv')
dotenv.config();



app.post('/justdialdata', async(req, res) => {
    try {
        const response = await axios.get(`https://www.justdial.com/functions/isBExists.php?city=${req.body.city}&ncatid=10393442&pincode=&area=&mobile=&wap=77&source=77`, {
            headers: { "Content-Type": "application/json" },
        });

        // You can access the response data using response.data
        const responseData = response.data;
        res.json(responseData); // Send a success response
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});






if (process.env.API_PORT) {


    app.listen(process.env.API_PORT);



}
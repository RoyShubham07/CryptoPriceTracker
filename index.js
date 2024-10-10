import express from "express";
import axios from "axios";
const app=express();
const port=3000;
app.use(express.static("public"));

app.get("/", async(req,res)=>{
    try{
        const resp=await axios.get("https://blockchain.info/ticker");
        const price=resp.data;
        res.render("index.ejs",{price});
    }
    catch(error)
    {
        console.log('Error fetching data from Blockchain API', error);
        res.status(500).send('Error fetching cryptocurrency data');

    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
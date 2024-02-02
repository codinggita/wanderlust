import express from "express";
const app = express();
const port = 12000;

app.use(express.json());

 
let states = {
  Himachal: [
    {
      place: "Manali",
      averageRating: 0,
      price:10000 ,
    },
    {
        place: "Shimla",
        averageRating: 0,
        price:5000 ,
    },
    {
        place: "Dalhousie",
        averageRating: 0,
        price:3000,
    },
    
  ],
};


app.get("/states", (req, res) => {
  res.json(states.Himachal);
});



app.get("/*", (req, res) => {
  res.send("You are on worng route. Here's the list of possible routes");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 12000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Wanderlust", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  addPlacesToMongoDB();
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Define schema for places
const placeSchema = new mongoose.Schema({
  images: String,
  place: String,
  averageRating: Number,
  price: Number
});

// Create model
const Place = mongoose.model('Place', placeSchema);

// Add data to MongoDB
const addPlacesToMongoDB = async () => {
  try {
    const states = {
      places: [
        { 
          images:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhistorical-place&psig=AOvVaw2EyXzy-S54yEvvuZMTzCq-&ust=1707385305656000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCXp4f4mIQDFQAAAAAdAAAAABAE",
          place: "Manali",
          averageRating: 1,
          price: 10000
        },
        {  
          images:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhistorical-place&psig=AOvVaw2EyXzy-S54yEvvuZMTzCq-&ust=1707385305656000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCXp4f4mIQDFQAAAAAdAAAAABAE",
          place: "Shimla",
          averageRating: 2,
          price: 5000
        },
        {   
          images:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhistorical-place&psig=AOvVaw2EyXzy-S54yEvvuZMTzCq-&ust=1707385305656000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCXp4f4mIQDFQAAAAAdAAAAABAE",
          place: "Dalhousie",
          averageRating: 3,
          price: 3000
        }
      ]
    };

    await Place.insertMany(states.places); // Use insertMany to insert all places at once

    console.log("Data added to MongoDB");
  } catch (error) {
    console.error("Error adding data to MongoDB:", error);
  }
};

// Define route to fetch places
app.get("/states", async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).send("Error fetching places");
  }
});

// Define catch-all route for invalid routes
app.get("/*", (req, res) => {
  res.send("You are on the wrong route. Here's the list of possible routes");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

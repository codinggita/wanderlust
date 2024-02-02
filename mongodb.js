import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string

// Database Name
const dbName = 'Wanderlust';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db(dbName);
const collection = db.collection('Places');

// Insert a document
collection.insertOne({ key: 'value' }, (err, result) => {
  if (err) {
    console.error('Error inserting document:', err);
    return;
  }

  console.log('Document inserted:', result.ops);
});
  // Perform database operations here

  // Close the connection when done
  client.close();
});

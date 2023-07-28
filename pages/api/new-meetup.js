import { MongoClient } from "mongodb";

async function Handler(req, res) {
  if (req.method === "POST" ) {
    try {
      const data = req.body;

      if (!data || Object.keys(data).length === 0) {
        // If the request body is empty or doesn't contain valid data, respond with an error
        return res.status(400).json({ error: "Invalid data provided." });
      }

      const client = await MongoClient.connect(
        "mongodb+srv://varshamhaske97:cwDJU93BUcAl2aVV@cluster0.m6hewrz.mongodb.net/MeetUps?retryWrites=true&w=majority"
      );

      console.log('Conected to MongoDB!')
      const db = client.db("MeetUps");
      const meetupCollection = db.collection("meetups");

      const result = await meetupCollection.insertOne(data);
      console.log(result)
      client.close();

      res.status(201).json({ message: "Meetup inserted!" });
    } catch (error) {
      console.error("Error inserting meetup:", error.message);
      res.status(500).json({ error: "Failed to insert meetup data." });
    }
  } else {
    res.status(404).json({ error: "Invalid request method." });
  }
}

export default Handler;

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Server is running!" });
});

// This server is created especially for this YOUTUBE_SEARCH_API because it was having a cors issue, and it required to bypass that cors by not fetching it directly on the client side but instead by fetching it in our server, applying cors configs and then fetching the backend server from the client side

app.get("/search", async (req, res) => {
  try {
    const { query } = req.query;
    const url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

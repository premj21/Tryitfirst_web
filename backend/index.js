const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: "500mb" }));

app.get("/proxy/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await fetch(
      `http://104.198.204.91:5000/slot_details/${id}/413004`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
});

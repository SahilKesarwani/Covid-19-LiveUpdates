const express = require("express");
const axios = require("axios").default;

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

app.get("/updates", async (req, res) => {
	const { data } = await axios.get("https://data.covid19india.org/v4/min/data.min.json");
	res.json(data);
});

app.listen(PORT, () => {
	console.log(`Server is running at port ${PORT}`);
});

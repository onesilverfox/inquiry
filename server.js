const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/webhook', async (req, res) => {
  try {
    console.log('Received data:', req.body);
    await axios.post('https://your-n8n-instance/webhook/xyz', req.body);
    res.status(200).send('Forwarded to n8n');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error forwarding to n8n');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

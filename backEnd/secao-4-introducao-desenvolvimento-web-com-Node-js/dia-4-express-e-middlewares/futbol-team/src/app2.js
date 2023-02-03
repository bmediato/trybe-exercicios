const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, () => console.log(`RODANDO NA PORTA: ${PORT}`));

app.get('/teams', async (req, res, next) => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, './teams.json'));
    const team = JSON.parse(data);
    return res.status(200).json({ team });
  } catch (error) {
    return next(error);
  }
});

app.use((error, req, res, _next) => res.status(500).json({ error: error.message }));
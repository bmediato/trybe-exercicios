require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
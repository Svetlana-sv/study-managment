require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const models = require('./models/model');
const { json } = require('express');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(json());
app.use('/api', router);

// Обработка ошибок
app.use(errorHandler);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'OK' });
});

const start = async () => {
  try {
    // await sequelize.init();
    await sequelize.authenticate(); // устанавливается подключение к бд
    await sequelize.sync(); // сверяет состояние бд со со схемой данных
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const { seedAdmin } = require('./controllers/authController.js');

dotenv.config();
connectDB().then(() => {
  seedAdmin();
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes.js'));
app.use('/api/blogs', require('./routes/blogRoutes.js'));
app.use('/api/youtube', require('./routes/youtubeRoutes.js'));

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'FitLife Studio API active' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`FitLife Studio Server running on port ${PORT}`);
});
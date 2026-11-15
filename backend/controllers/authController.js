const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        success: true,
        token: generateToken(admin._id),
        username: admin.username
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const seedAdmin = async () => {
  try {
    const count = await Admin.countDocuments();
    if (count === 0) {
      const admin = new Admin({
        username: process.env.ADMIN_USERNAME || 'admin',
        password: process.env.ADMIN_PASSWORD || 'FitLifeStudio@2026'
      });
      await admin.save();
      console.log('Default Admin user created successfully.');
    }
  } catch (error) {
    console.error('Error seeding admin:', error);
  }
};

module.exports = { loginAdmin, seedAdmin };
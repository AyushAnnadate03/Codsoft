// routes/auth.js (simplified)
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/login', async (req,res)=>{
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if(!user) return res.status(401).send({ error: 'Invalid creds' });
  const ok = await bcrypt.compare(password, user.passwordHash);
  if(!ok) return res.status(401).send({ error: 'Invalid creds' });
  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn:'7d' });
  res.send({ token, user: { id: user._id, name: user.name, role: user.role, email: user.email } });
});
module.exports = router;

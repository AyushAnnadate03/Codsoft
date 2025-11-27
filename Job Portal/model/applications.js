// models/Application.js
const mongoose = require('mongoose');
const appSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  coverLetter: String,
  resumeUrl: String, // S3 link or storage path
  status: { type: String, enum: ['applied','reviewed','rejected','accepted'], default: 'applied' },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Application', appSchema);

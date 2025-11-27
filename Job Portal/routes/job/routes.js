// /api/jobs?search=frontend&page=1&location=Mumbai&type=Full-time
const q = req.query.search || '';
const page = parseInt(req.query.page) || 1;
const limit = 10;
const filter = { isActive: true };
if(req.query.location) filter.location = req.query.location;
if(q) filter.$text = { $search: q };
const jobs = await Job.find(filter)
  .skip((page-1)*limit)
  .limit(limit)
  .sort({ createdAt: -1 });

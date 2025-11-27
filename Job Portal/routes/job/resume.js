const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // for prod use S3

router.post('/', authMiddleware, upload.single('resume'), async (req,res)=>{
  // req.file.path contains file path
  // upload to S3 here and get url
});

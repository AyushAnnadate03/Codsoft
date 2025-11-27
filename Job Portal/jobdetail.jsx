const handleSubmit = async (e) => {
  e.preventDefault();
  const fd = new FormData();
  fd.append('jobId', job._id);
  fd.append('coverLetter', coverLetter);
  if(resumeFile) fd.append('resume', resumeFile);
  await api.post('/applications', fd, { headers: { 'Content-Type': 'multipart/form-data' }});
  alert('Applied!');
};

import React, {useState, useEffect} from 'react';
import api from '../services/api';
import JobCard from '../components/JobCard';

export default function Jobs(){
  const [jobs, setJobs] = useState([]);
  const [q, setQ] = useState('');
  useEffect(()=>{ fetchJobs(); },[]);
  async function fetchJobs(page=1){
    const res = await api.get('/jobs', { params: { search: q, page }});
    setJobs(res.data);
  }
  return (
    <div>
      <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search jobs..." />
      <button onClick={()=>fetchJobs()}>Search</button>
      <div className="grid">
        {jobs.map(j => <JobCard job={j} key={j._id} />)}
      </div>
    </div>
  );
}

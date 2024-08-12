import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobCard from './components/JobCard';
import './index.css'; // Ensure the CSS file with stars is imported
// import { query, collection, orderBy, getDocs, where } from 'firebase/firestore'; // Import necessary Firestore functions
// import { db } from './firebase.config'; // Import Firestore instance

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = collection(db, 'jobs');
    const q = query(jobsRef, orderBy('postedOn', 'desc'));
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = collection(db, 'jobs');
    const q = query(
      jobsRef,
      where('type', '==', jobCriteria.type),
      where('title', '==', jobCriteria.title),
      where('experience', '==', jobCriteria.experience),
      where('location', '==', jobCriteria.location),
      orderBy('postedOn', 'desc')
    );
    const req = await getDocs(q);

    req.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const generateStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      const left = Math.random() * 100; // Random horizontal position
      const top = Math.random() * 100; // Random vertical position
      const size = Math.random() * 2 + 1; // Random star size between 1px and 3px
  
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            position: 'absolute',
            zIndex: 0,
          }}
        />
      );
    }
    return stars;
  };

  const generateShootingStars = (numShootingStars) => {
    // Placeholder function for generating shooting stars
    // Implement your logic here
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      
      {customSearch && (
        <button
          onClick={fetchJobs}
          className="absolute top-2 right-2 bg-blue-500 px-6 py-2 rounded-md text-white"
        >
          Clear Filters
        </button>
      )}
      
      <div className="flex flex-wrap gap-4 p-4">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>

      {/* Add random stars */}
      {generateStars(100)} {/* Adjust number of stars as needed */}
      {/* Add shooting stars */}
      {generateShootingStars(10)}
    </div>
  );
}

export default App;
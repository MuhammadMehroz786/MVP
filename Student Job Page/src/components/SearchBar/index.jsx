import React, { useState } from 'react'

function SearchBar(props) {
    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        locaion: "",
        experience: "",
        type:""
    })

    const handleChange = (e) => {
        setJobCriteria((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const search = async() => {
        await props.fetchJobsCustom(jobCriteria);
    }
    

  return (
    <div className='flex flex-col sm:flex-row gap-4 my-10 justify-center px-4 sm:px-10'>
        <select onChange={handleChange} name="title" value={jobCriteria.title} className='w-full sm:w-64 py-3 pl-4 bg-white border border-gray-300 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value="" disabled hidden>Job Role</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Android Developer">Android Developer</option>
            <option value="Developer Advocate">Developer Advocate</option>
        </select>
        <select onChange={handleChange} name="type" value={jobCriteria.type} className='w-full sm:w-64 py-3 pl-4 bg-white border border-gray-300 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value="" disabled hidden>Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
        </select>
        <select onChange={handleChange} name="location" value={jobCriteria.location} className='w-full sm:w-64 py-3 pl-4 bg-white border border-gray-300 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value="" disabled hidden>Location</option>
            <option value="Remote">Remote</option>
            <option value="In-Office">In-Office</option>
            <option value="Hybrid">Hybrid</option>
        </select>
        <select onChange={handleChange} name="experience" value={jobCriteria.experience} className='w-full sm:w-64 py-3 pl-4 bg-white border border-gray-300 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500'>
            <option value="" disabled hidden>Experience</option>
            <option value="Fresher">Fresher</option>
            <option value="Junior Level">Junior Level</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Senior Level">Senior Level</option>
        </select>
        <button onClick={search} className='w-full sm:w-64 bg-blue-600 text-white font-bold py-3 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400'>Search</button>
    </div>
  )
}

export default SearchBar
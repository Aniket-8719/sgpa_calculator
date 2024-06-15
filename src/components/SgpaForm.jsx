import React from 'react'
import { useState } from 'react';

const SgpaForm = ({addSubjects}) => {
    const [grades,setGrades] = useState('');
    const [credits,setCredits] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!grades.trim() || !credits.trim()) return;
        addSubjects(grades,credits);
        setGrades('');
        setCredits('');
    };
  return (
  <form onSubmit={handleSubmit} className='flex justify-center items-center gap-4 m-4 mt-8'>
   <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
  <div className='flex justify-center items-center gap-4'> 
    <div className='flex  max-w-[150px]'>
        <select  className='border w-full px-6 py-1.5 bg-gray-100 rounded border-1 border-gray-500'
        value={credits}
        onChange={(e)=> setCredits(e.target.value)}>
            <option>Credits</option>
            <option value="1" className='bg-white'>1</option>
            <option value="2" className='bg-white'>2</option>
            <option value="3" className='bg-white'>3</option>
            <option value="4" className='bg-white'>4</option>
            <option value="5" className='bg-white'>5</option>
            <option value="6" className='bg-white'>6</option>
            <option value="7" className='bg-white'>7</option>
        </select>
    </div>

    <div className='flex  max-w-[150px]'>
        <select className='border w-full px-6 py-1.5 bg-gray-100 rounded border-1 border-gray-500'
        value={grades}
        onChange={(e)=> setGrades(e.target.value)}>
            <option>Grades</option>
            <option value="A+" className='bg-white'>A+</option>
            <option value="A" className='bg-white'>A</option>
            <option value="B+" className='bg-white'>B+</option>
            <option value="B" className='bg-white'>B</option>
            <option value="C+" className='bg-white'>C+</option>
            <option value="C" className='bg-white'>C</option>
            <option value="D+" className='bg-white'>D+</option>
            <option value="E" className='bg-white'>E</option>
            <option value="F" className='bg-white'>F</option>
            <option value="I" className='bg-white'>I</option>
            <option value="X" className='bg-white'>X</option>
        </select>
    </div>
    
    </div>
    <button type="submit" className="bg-blue-500 text-white px-24 py-2 rounded">Add</button>
   </div>
</form>
  )
}

export default SgpaForm

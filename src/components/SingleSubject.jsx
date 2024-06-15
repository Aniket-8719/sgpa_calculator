import React from 'react';

const SingleSubject = ({ subjects }) => {
  return (
    <div className=' bg-yellow-100 p-2 rounded'>
       <table className='w-full'>
        <thead className='h-16'>
          <tr className='bg-gray-200 h-full'>
            <th className='px-4 py-2'>Credits</th>
            <th className='px-4 py-2'>Grades</th>
          </tr>
        </thead>
        <tbody>
         {subjects.map(data=>(
             <tr key={data.id} className='text-center'>
             <td className='border px-4 py-2'>{data.credits}</td>
             <td className='border px-4 py-2'>{data.grades}</td>
           </tr>
         ))}
        </tbody>
      </table>
    </div>
  );
};

export default SingleSubject;

import React, { useState } from 'react';
import CalculateCGPA from './CalculateCGPA';

const CalculateSGPA = ({ subjects }) => {
  const gradeMap = {
    "A+": 10,
    "A": 9,
    "B+": 8,
    "B": 7,
    "C+": 6,
    "C": 5,
    "D": 4,
    "E": 0,
    "F": 0,
    "I": 0,
    "X": 0
  };

  const [sgpa, setSGPA] = useState(null);

  const calculateSGPA = () => {

    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach(subject => {
      const grade = subject.grades;
      const credits = parseInt(subject.credits, 10);
      if (gradeMap.hasOwnProperty(grade)) {
        const gradePoint = gradeMap[grade];
        totalPoints += gradePoint * credits;
        totalCredits += credits;
      }
    });

    if (totalCredits === 0) {
      setSGPA(0);
    } else {
      setSGPA((totalPoints / totalCredits).toFixed(2));
    }
  };

  return (
    <div className='flex flex-col justify-center items-center mt-4'>
      <button
        onClick={calculateSGPA}
        className='bg-blue-500 text-white px-8 py-2 rounded mb-4'
      >
        Calculate SGPA
      </button>
      {sgpa !== null && (
        <div className='text-lg font-semibold'>
          Your SGPA is: {sgpa}
        </div>
      )}
      <CalculateCGPA sgpa={sgpa}/>
    </div>
  );
};

export default CalculateSGPA;

import React from "react";
import { useState } from "react";

const CalculateCGPA = ({ sgpa }) => {
  const [semester, setSemester] = useState('');
  const [prevCGPA, setPrevCGPA] = useState('');
  const [manualSGPA , setManualSGPA] = useState('');
  const [currentCGPA, setCurrentCGPA] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedSemester = parseInt(semester, 10);
    const parsedPrevCGPA = parseFloat(prevCGPA);
    const parsedManualSGPA = parseFloat(manualSGPA);

    if(isNaN(parsedPrevCGPA)){
       alert("Invalid CGPA");
       return;
    }
   
    if (parsedSemester > 0 && parsedSemester <= 8 && !isNaN(parsedPrevCGPA)) {
      const totalPrevCGPA = parsedPrevCGPA * (parsedSemester - 1);
      const currentSGPA = isNaN(parsedManualSGPA) ? parseFloat(sgpa) : parsedManualSGPA;
      const total = totalPrevCGPA + currentSGPA;
      const calculatedCGPA = total / parsedSemester;
      setCurrentCGPA(calculatedCGPA.toFixed(2));
    }else {
      alert("Invalid semester");
    }
    
  };
  

  return (
    <>
      <p className="text-sm font-bold mt-32 mb-2 text-red-500 ">
        Note:- After Calculating your SGPA{" "}
      </p>
      <div className="flex flex-col  max-w-[400px] justify-center items-center mt-4">
        <label >If you have a calculated SGPA</label>
              <input
                type="text"
                required
                value={manualSGPA}
                className="border w-full px-6 py-1.5 bg-gray-100 rounded border-1 border-gray-500"
                placeholder="your current SGPA"
                onChange={(e) => setManualSGPA(e.target.value)}
              ></input>
            </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-4 m-4 mt-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          <div className="flex justify-center items-center gap-4">
            <div className="flex  max-w-[200px]">
              <select
                className="border w-full px-6 py-2 bg-gray-100 rounded border-1 border-gray-500"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
              >
                <option>Last Semester</option>
                <option value="1" className="bg-white">
                  1
                </option>
                <option value="2" className="bg-white">
                  2
                </option>
                <option value="3" className="bg-white">
                  3
                </option>
                <option value="4" className="bg-white">
                  4
                </option>
                <option value="5" className="bg-white">
                  5
                </option>
                <option value="6" className="bg-white">
                  6
                </option>
                <option value="7" className="bg-white">
                  7
                </option>
                <option value="7" className="bg-white">
                  8
                </option>
              </select>
            </div>

            <div className="flex  max-w-[200px]">
              <input
                type="text"
                
                value={prevCGPA}
                className="border w-full px-6 py-1.5 bg-gray-100 rounded border-1 border-gray-500"
                placeholder="your current CGPA"
                onChange={(e) => setPrevCGPA(e.target.value)}
              ></input>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-24 py-2 rounded"
          >
            Calcualte CGPA
          </button>
          {currentCGPA !== null && (
            <div className="text-lg font-semibold">
              Your CGPA is: {currentCGPA}
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default CalculateCGPA;

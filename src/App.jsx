import { useState } from 'react'
import SgpaForm from './components/SgpaForm'
import SingleSubject from './components/SingleSubject';
import CalculateSGPA from './components/CalculateSGPA';


function App() {
  const [subjects,setsubjects]=useState([]);
  const addSubjects = (grades,credits)=>{
    const newSubject = {id:Date.now(), grades, credits};
    setsubjects([...subjects,newSubject]);
  }

  return (
   <>
   <SgpaForm addSubjects={addSubjects}/>
   <SingleSubject subjects={subjects} />
   <CalculateSGPA subjects={subjects}/>
   </>
  )
}

export default App

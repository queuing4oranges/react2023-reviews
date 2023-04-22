import React, { useState, useEffect } from 'react';
import reviews from './data';


const App = () => {
 const [index, setIndex] = useState(0);
 //extracting the values only for the review at a certain index
 const {name, job, image, text} = reviews[index]




const showNextPerson = () =>{
  const nextIndex = index +1
  setIndex(nextIndex)
}

const showPrevPerson = () => {
  const prevIndex = index -1
  setIndex(prevIndex)
}



 
  return( 
  <div>
    {name}{job}
    <button onClick={showPrevPerson}>Previous</button>
    <button onClick={showNextPerson}>Next</button>

    </div>
  )
}
export default App;
    

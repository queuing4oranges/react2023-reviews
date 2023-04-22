import React, { useState } from 'react';
import reviews from './data';


const App = () => {
 const [index, setIndex] = useState(0);
 //extracting the values only for the review at a certain index
 const {name, job, image, text} = reviews[index]

  const showNextPerson = () =>{
  //set to -1 because array length=4 but index goes up to 3
    if(index < (reviews.length-1)) {
      const nextIndex = index +1
      setIndex(nextIndex)
    } else {
      console.log('this is the end')
      return false
    }
  }

  const showPrevPerson = () => {
    if(index > 0) {
      const prevIndex = index - 1
      setIndex(prevIndex)
      } else {
        console.log('this is the beginning')
        return false
      }
  }

  /*
  - Math.random() generates nr between 0 (incl) and 1(excl)
  - Math.floor() rounds down
  - multiplied * 4 give a nr between 0 and 3 (incl)
  */
  const getRandomPerson = () => {
    let randomIndex = Math.floor(Math.random() * (reviews.length-1));
    console.log(randomIndex)
    if(randomIndex === index){  //to prevent having the same person twice in a row
      randomIndex = randomIndex+1
      setIndex(randomIndex)
    } else {
      setIndex(randomIndex)
    }
  }

  return( 
    <main>
      <div className='review'>
        <div className="img-container">
          <img className='person-img' src={image} alt={name} />
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        
        <div className="btn-container">
        <button className='prev-btn' onClick={showPrevPerson}>&#60;</button>
        <button className='next-btn' onClick={showNextPerson}>&#62;</button>
        </div>
        <button className='btn-block btn' onClick={getRandomPerson}>Random Person</button>
      </div>
  </main>
  )
}
export default App;
    

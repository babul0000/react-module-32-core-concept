
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Bowler from './Bowler'

function App() {
  function handleClick() {
    alert('i am a click')
  }

  const handleClick2 = () => {
    alert("i am a click 2")
  }

  const handleNumber = (num) => {
const numDouble = num + 100;
alert(numDouble)
  }

  return (
    <>
      <h1>hello bangladesh</h1>
      {/* <Batsman></Batsman> */}
      
      <Bowler></Bowler>


      
      {/* <Counter></Counter> */}


      {/* <button onClick={handleClick}>click me</button> */}
      {/* <button onClick={handleClick2}>click you</button> */}
      {/* <button onClick={() => alert("click4")}>click oww</button> */}


{/* <button onClick={() => handleNumber(10)}>click 6</button> */}

    </>
  )
}

export default App

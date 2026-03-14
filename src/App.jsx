
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Bowler from './Bowler'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'
import Posts from './Post'
import Buying from './Practice'



// const fatchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())

// const fetchFriends = async() => {
// const res = await fetch("https://jsonplaceholder.typicode.com/users")
// return res.json();

// }

// const postApi = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   return res.json();
// }



// const postData = postApi();

// const boysFetch = async() => {
// const res = await fetch("https://jsonplaceholder.typicode.com/users")
// return res.json();
// }
// const boysPromise = boysFetch();

const userApi = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json()
}


function App() {
  
  const apiFinal = userApi();

  // const boysPromise = boysFetch();
// const friendsPromiss = fetchFriends();

  return (
    <>
      <h1>hello bangladesh</h1>

<Suspense fallback={<h2>hello...</h2>}>
  <Buying apiFinal={apiFinal}></Buying>
</Suspense>





{/* 
<Suspense fallback={<h2>hello...</h2>}>
  <Friends boysPromise={boysPromise}></Friends>
</Suspense> */}


        
{/* <Suspense fallback={<h2>hello....</h2>}>
  <Posts postData={postData}></Posts>
</Suspense> */}



      {/* <Suspense fallback={<h4>hello...</h4>}>
        <Friends friendsPromiss={friendsPromiss}></Friends>
      </Suspense> */}


      {/* <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers = {fatchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h4>hello...</h4>}>
        <Friends friendsPromiss={friendsPromiss}></Friends>
      </Suspense> */}

      {/* <Users></Users> */}



      {/* <Batsman></Batsman> */}
      
      {/* <Bowler></Bowler> */}


      
      {/* <Counter></Counter> */}


      {/* <button onClick={handleClick}>click me</button> */}
      {/* <button onClick={handleClick2}>click you</button> */}
      {/* <button onClick={() => alert("click4")}>click oww</button> */}


{/* <button onClick={() => handleNumber(10)}>click 6</button> */}

    </>
  )
}

export default App

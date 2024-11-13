import React, {useState, useEffect} from 'react'

function App() {
  const [count, setCount] = useState(0)

  let sum = 0
  for(let i=0;i<10000000000000;i++){
    sum += i
  }

  setTimeout(()=>{
    
  },10000)
  useEffect(()=>{
    document.title = `Count is ${count}`;
    fetch("http://localhost:3000")
    .then(response => response.text())
    .then(data => console.log(data))  // Output: "Hello from backend!"
    .catch(error => console.error("Error:", error));
  },[])
  
  return (
    <>  
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  )
}

export default App

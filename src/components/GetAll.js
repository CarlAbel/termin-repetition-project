import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [data, setData] = useState([])

  useEffect(function () {
    (async function () {
      try {
        const response = await axios.get("http://localhost:3030/posts")
        setData(response.data)
      } catch (error) {}
    })()
  }, [])
  return (
    <div className="App">
      {data?.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  )
}

export default App
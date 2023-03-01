import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [data, setData] = useState([])
  const [detailData, setDetailData] = useState({})

  async function detail(id){
    try {
      const response = await axios.get("http://localhost:3030/posts/" + id)
      setDetailData(response.data)
    } catch (error) {}

  }

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
      {data?.map((item) => 
        <button onClick={ () => detail(item.id)}>{item.title}</button>
      )}
      <h1>{detailData.title}</h1>
      <p>{detailData.description}</p>
    </div>
  )
}

export default App
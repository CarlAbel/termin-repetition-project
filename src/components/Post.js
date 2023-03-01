
//POST
import { useState } from "react"
import "./App.css"
import "./index.css"
import axios from "axios"

function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    const form = new FormData()
    form.append("title", title)
    form.append("description", desc)
    form.append("file", file)

    try {
      const res = await axios.post("http://localhost:3030/posts", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log(res.status)
    } catch (error) {
      console.log(error)
    } finally {
      //setIsLoading(false) //TODO
    }
  }
  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center">Create a Post</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <div className="mb-4">
          <label className="block font-medium text-gray-700">Title</label>
          <input
            className="form-input mt-1 block w-full rounded-md border-gray-300 bg-slate-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 rounded-md">
            Description
          </label>
          <input
            className="form-textarea mt-1 block w-full rounded-md border-gray-300 bg-slate-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="description"
            id="body"
            rows="3"
            required
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></input>
        </div>
        <div className="mb-4">
          <label className="block font-medium text-gray-700 rounded-md">
            Choose a file
          </label>
          <input
            className="form-textarea mt-1 block w-full rounded-md border-gray-300 bg-slate-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="file"
            name="file"
            id="body"
            rows="3"
            required
            value={file}
            onChange={(e) => setFile(e.target.value)}
          ></input>
        </div>
        <div className="text-center">
          <button
            className="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
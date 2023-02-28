import "./App.css"

function App() {
  function handleSubmit() {
    fetch("http://localhost:3030/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "hello",
        body: "world",
      }),
    })
  }

  return (
    <div className="App">
      <form>
        <label>
          Title
          <input type="text" name="title" />
        </label>
        <label>
          description
          <input type="text" name="body" />
        </label>
        <button onClick={handleSubmit} type="submit">
          Save
        </button>
      </form>
    </div>
  )
}

export default App

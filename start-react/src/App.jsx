

const App = () => {
// let name = "vikas";
let age = 20;

  return (
    <>
  <h2 style= {{color : age >18 ? "green" : "red"}}>
  {age > 18 ? "adult" :"minor" }
  </h2>
  </>
  )
}

export default App

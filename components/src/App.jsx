import User from "./components/User"
import Destr from "./components/Destr"

const App = () => {
  return (
    <div>
      <h1>Main app</h1>
      < Destr name = "destructure"/>
      <User name = "ankit"/>
      <User name = "ashish"/>
      <User name ="ashhu">
       <h2>i am inside user</h2> 
      </User>

    </div>
  )
}


export default App

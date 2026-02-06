import Home from "../view/Home"
import "./App.css"
import NavigationBar from "./components/NavigationBar"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <div className="bg-dark min-vh-100">
        <NavigationBar />
        <Home />
      </div>
    </>
  )
}

export default App

import About from "./Component/About"
import Foot from "./Component/Foot"
import Hero from "./Component/Hero"
import Nav from "./Component/Nav"
import Plan from "./Component/Plan"
import Review from "./Component/Review"
import Svg from "./Component/Svg"
import './index.css'

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Svg />
        <Nav />
        <Hero />
        <About />
        <Plan />
        <Review />
        <Foot />
      </div>

    </>
  )
}

export default App

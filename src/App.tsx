import LeftBar from "./components/LeftBar"
import RightBar from "./components/RightBar"

const App = () => {

  return (
    <div className="
    flex
    justify-center
    flex-col
    p-[25px]
    md:p-[60px]
    md:flex-row
    md:justify-evenly
    ">

      <div className="
      relative
      leftBar
      flex-col
      justify-between
      items-center
      w-1/4
      ">
        <LeftBar />
      </div>
      <RightBar />
    </div>


  )
}

export default App

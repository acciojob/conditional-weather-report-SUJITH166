
import React from "react";
import './../styles/App.css';
const def = {temperature : 0, conditions : "Cool"}
const App = () => {

  const[info, setInfo] = useState(def)


  useEffect(() => {
    setTimeout(() => {
      setInfo({ temperature: 25, conditions: "Sunny" })
    }, 2000)
  },[])

  return (
    <div>
      <WeatherDisplay info={info} />
    </div>
  )
}

export default App

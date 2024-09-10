import { useEffect } from "react"
import { ProfileCard } from "./components/profilecard/profilecard"


function App() {

  useEffect(() => {

    const isDark = window.matchMedia("(prefers-color-scheme : dark)")

    const setTheme = () => {
      if(isDark.matches){
        document.body.classList.add("dark")
      }else{
        document.body.classList.remove("dark")
      }
    }
    isDark.addEventListener("change" , setTheme)

    return(()=>{
      isDark.addEventListener("change" , setTheme)
    })
  } , [])

  return (
    <div className="main m-auto bg-white row"  style={{ width : "90dvw"}}>
      <div className=" col-md-5 col-lg-2">
      <ProfileCard />

      </div>

    </div>
  )
}

export default App

import { useEffect } from "react"
import { ProfileCard } from "./components/profilecard/profilecard"
import { AddPostCard } from "./components/addpostcard/addpostcard"


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
    <div className="main m-auto bg-white ">
      <div className="row d-flex justify-content-center gap-3">
      <ProfileCard />
      <AddPostCard />

      </div>

    </div>
  )
}

export default App

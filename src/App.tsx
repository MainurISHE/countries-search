import { Sidebar } from "./components/Sidebar/SideBar"
import { useEffect, useState } from "react"
import type { ICountryShort } from "./types"
import { BASE_URL } from "./constans"

function App() {
  const [countriesList, setCountriesList] = useState<ICountryShort[]>([])

  useEffect(() => {
    const getCountries = async() => {
      try{
        const response = await fetch(`${BASE_URL}/all?fields=alpha3Code,name`)
        if (!response.ok) {
          throw new Error
        }
        const data:ICountryShort[] = await response.json()
        console.log('data', data)
      } catch(e) {
        console.log(e)
      }
    }
    getCountries()
  },[])
  return (
    <>
    <Sidebar/>
    </>
  )
}

export default App

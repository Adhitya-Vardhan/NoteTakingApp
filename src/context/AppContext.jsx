import { createContext, useState } from "react";

export const AppContext = createContext()

export default function AppContextProvider({children}) {
  if(!localStorage.getItem("Notes")){
    localStorage.setItem("Notes", JSON.stringify([]))
  }  
  let data = localStorage.getItem("Notes")
  let [notes, setNotes] = useState(JSON.parse(data))

  let [edit, setEdit] = useState()
    let value = {
        setNotes, 
        notes,
        edit,
        setEdit,
    }

  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

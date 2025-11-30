"use client"

import { useState} from "react"

export default function BotaoTema(){
    const [darkTheme, setDarkTheme] = useState(false)

    const changeTheme = ()=> {
        if(darkTheme){
            document.documentElement.classList.remove("dark");
            setDarkTheme(false)
        } else{
            document.documentElement.classList.add("dark")
            setDarkTheme(true)
        }
    }

    return (
    <button
      onClick={changeTheme}
      className=" cursor-pointer fixed bottom-5 right-5 p-3 rounded-full shadow-lg font-bold transition-all hover:scale-110 
                 bg-gray-200 text-black dark:bg-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-600"
    >
      {darkTheme ? "🌙 Escuro" : "🌞 Claro"}
    </button>
  );
}
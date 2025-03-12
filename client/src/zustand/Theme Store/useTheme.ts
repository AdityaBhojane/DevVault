import { create } from "zustand";

interface ThemeStore {
    currentTheme:boolean,
    setCurrentTheme:()=>void
}

const useTheme = create<ThemeStore>((set)=>{
    return {
        currentTheme: true,
        setCurrentTheme:()=>set((state)=>({currentTheme:!state.currentTheme}))
    }
})

export {useTheme}
import { create } from "zustand";

interface UserStore {
    username:string,
    setUsername:(param:string)=>void
}

const useAuthStore = create<UserStore>((set)=>({
    username:"aditya",
    setUsername:(param:string)=> set(()=> ({username:param}))
}));

export {useAuthStore}
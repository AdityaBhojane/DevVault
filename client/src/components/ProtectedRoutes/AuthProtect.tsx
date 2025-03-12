import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function AuthProtect() {

    const navigate = useNavigate()

    useEffect(()=>{
        const abc = setTimeout(() => {
            console.log("first")
            navigate('/auth/signin')
        }, 2000);
        return ()=> clearTimeout(abc)
    },[navigate])

    return (
        <div>Loading...</div>
    )
}

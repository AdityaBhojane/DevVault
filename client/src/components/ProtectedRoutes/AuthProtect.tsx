import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import LoaderBar from "../LoderBar/LoaderBar";

export default function AuthProtect() {
    const [percent, setPercent] = useState<number>(0);

    const increase = () => {
      setPercent((prevPercent) => {
        const newPercent = prevPercent + 5;
        if (newPercent > 100) {
          return 100;
        }
        return newPercent;
      });
    };

    const navigate = useNavigate();

    useEffect(()=>{
        const abc = setInterval(() => {
            increase()
        }, 100);
        if(percent == 100){
            clearInterval(abc);
            navigate('/auth/signin');
        }
        return ()=> clearInterval(abc)
    },[navigate, percent])

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <LoaderBar percent={percent}/>
        </div>
    )
}

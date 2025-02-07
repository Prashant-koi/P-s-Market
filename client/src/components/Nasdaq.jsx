import axios from "axios"
import { useEffect, useState } from "react"

export default function Nasdaq(){
    const [stockData, setStockData] = useState(null)

    useEffect(()=>{
        
        const fetchData = async() => {
            try{
                const response = axios.post("http://localhost:3001/nasdaq")
                    
                if (response.data.sucess){
                    console.log(response.data)
                    setStockData(response.data)
                }
                                
            }catch (err) {
                console.error("error fetching data:", err.response.data)

            }
        }

            fetchData()
        },[])
        

    return(
        <div>Stocks of NASDAQ here!</div>
    )
}
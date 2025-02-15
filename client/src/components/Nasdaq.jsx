import axios from "axios"
import { useEffect, useState } from "react"

import { SERVER_URL } from "../env";

export default function Nasdaq(){
    const [stockData, setStockData] = useState(null)

    useEffect(()=>{
        
        const fetchData = async() => {
            try{
                const response = axios.post(SERVER_URL)
                    
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
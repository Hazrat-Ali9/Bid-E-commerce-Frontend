import { useEffect, useState } from "react"



const useOrder =()=>{
    const [orders,setOrders] =useState([])
    useEffect(()=>{
        fetch('https://abccomerce.onrender.com/orders')
        .then(res =>res.json())
        .then(data =>setOrders(data))
    },[])
    return [orders,setOrders]
}

export default useOrder
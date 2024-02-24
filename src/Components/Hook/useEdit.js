import { useEffect, useState } from "react";

const UseEdit =id => {
    const [edit,setEdit] = useState({})
    useEffect(()=>{
        const url = `https://abccomerce.onrender.com/product/${id}`
        console.log(url)
        fetch(url)
        .then(res=> res.json())
        .then (data =>setEdit(data))
    },[id])
    
    return [edit,setEdit]
};

export default UseEdit;
import { createContext, useState } from "react";
import { all_products } from "../Images/all_products";

export const StoreContext= createContext();

const StoreContextProvider = (props)=>{

const[countitem, setCountItem] = useState({})


const addCount= (itemid)=>{
    if(!countitem[itemid]){
        setCountItem((prev)=>({...prev,[itemid]:1}))
    }

    else{
        setCountItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }
}
const removeCount= (itemid)=>{
    setCountItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
}


const StoreValue={
    all_products,
    addCount,
    removeCount,
    countitem,
    setCountItem,
}

return(

    <StoreContext.Provider value={StoreValue}>
        {props.children}
    </StoreContext.Provider>
)

}

export default StoreContextProvider;
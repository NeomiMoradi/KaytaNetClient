import React, { useEffect } from "react";
import { getAllProducts } from "../utils/Product";
const CraftKits = (props) => {
    useEffect(() => {
        getAllProducts().then(res => console.log(res.data)).catch(err=>console.log(err))
    })
    return <div>CraftKits</div>
}

export default CraftKits;
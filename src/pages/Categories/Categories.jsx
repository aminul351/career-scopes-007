import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {

    const [sectors ,setSectors] = useState([])

    useEffect(() =>{
        fetch('simple.json')
        .then(res => res.json())
        .then(data => setSectors(data))
    },[])

    console.log(sectors);
    return (
        <div className="grid container  mt-24 px-4 w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                sectors.map(item => (<Category item = {item} key={item.id}>
                </Category>))
            }
        </div>
    );
};

export default Categories;
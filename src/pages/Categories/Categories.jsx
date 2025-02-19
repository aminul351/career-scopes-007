import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <div>
            {
                sectors.map(item => (<Category item = {item} key={item.id}>
                     {/* <h2>{item.title}</h2>
                     <h2>{item.subtitle}</h2>
                                <Link to={`/categories/${item.id}`}><button>more</button></Link> */}

                                
                </Category>))
            }
        </div>
    );
};

export default Categories;
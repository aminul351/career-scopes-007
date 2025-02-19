import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ item }) => {
  const { id, title, subtitle, image } = item;
  return (
    <div >
      
      <Link to={`/categories/${id}`}>

      <div className=" bg-base-100 shadow-xl">
        <figure>
          <img className='w-full h-[300px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className='className="text-xl font-semibold"'>{subtitle}</p>
          <div className="card-actions justify-end">
            {/* <Link className='' to={`/categories/${id}`}>  <button className="bg-[#00bcf1] px-4 py-2 text-lg rounded-3xl"
            >
              See More</button></Link> */}
          </div>
        </div>
      </div>
      </Link>
    </div>

  );
};

export default Category;
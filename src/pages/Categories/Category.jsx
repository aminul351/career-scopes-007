import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ item }) => {
  const { id, title, subtitle, image } = item;
  return (
    <div >
      
      <Link to={`/categories/${id}`}>

      <div className=" bg-base-100 shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300">
        <figure>
          <img className='w-full h-[300px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body shadow-xl rounded-xl ">
          <h2 className="text-3xl font-textStyle font-bold">{title}</h2>
          <p className='className="text-xl font-semibold"'>{subtitle}</p>
          <div className=" ">
              <p  className="flex justify-center text-[#00bcf1] text-lg mt-2 ">See More →</p>
          </div>
        </div>
      </div>
      </Link>
    </div>

  );
};

export default Category;
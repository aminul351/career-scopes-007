import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({item}) => {
    const{id, title,subtitle} = item;
    return (
        <div >
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{subtitle}</p>
    <div className="card-actions justify-end">
    <Link className='btn btn-primary' to={`/categories/${id}`}><button>more</button></Link>
    </div>
    </div>
  </div>
</div>
            
    );
};

export default Category;
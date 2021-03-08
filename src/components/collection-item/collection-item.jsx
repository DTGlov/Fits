import React from 'react';
import './collection-item.css'

const CollectionItem = ({id,name,price,imageUrl}) => {
    return (
        <div className="collection-item flex flex-cols">
            <div className="">
          <img src={imageUrl} className="w-80 h-96 object-cover" alt="" />
          <div className="flex flex-col items-center justify-center bg-gray-300">
            <h1 className="font-bold">{name}</h1>
            <p>${price}</p>
          </div>
          </div>
      </div>
    );
}
 
export default CollectionItem;
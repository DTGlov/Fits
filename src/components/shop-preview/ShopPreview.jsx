import React from 'react';
import './ShopPreview.css'
import CollectionItem from '../collection-item/collection-item';

const ShopPreview = ({title,items}) => {
    return (
      <div className="shop-preview px-2 md:px-32">
        <h1 className="font-bold text-4xl py-4">{title}</h1>
        <div className="preview gap-4 grid grid-cols-2 md:grid md:grid-cols-4">
          {items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
      </div>
    );
}
 
export default ShopPreview;
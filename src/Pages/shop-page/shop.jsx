import React, { useState } from 'react';
import SHOP_DATA from './shop.data'
import './shop.css';
import ShopPreview from '../../components/shop-preview/ShopPreview';

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA)
  
  console.log(collections)

  return ( 
    <div className="shop-page">
      {collections && collections.map(({ id, ...otherCollectionProps }) => (
      <ShopPreview key={id} {...otherCollectionProps}/>
    ))}
    </div>
   );
}
 
export default ShopPage;
 

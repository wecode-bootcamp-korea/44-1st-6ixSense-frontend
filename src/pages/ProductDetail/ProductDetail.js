import React, { useEffect, useState } from 'react';
import './ProductDetail.scss';
import Image from './components/Image/Image';
import Detail from './components/Detail/Detail';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  const goodsId = params.id;
  const [productPrice, setProductPrice] = useState({});
  const { id, price, description, discountRate, name, productImage } =
    productPrice;

  useEffect(() => {
    fetch(`http://10.58.52.92:3000/products/${goodsId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(result => setProductPrice(result));
  }, [goodsId]);
  return (
    <div className="productDetail">
      <div className="wrap">
        {id && (
          <div className="both">
            <Image
              productImage={productImage}
              setProductPrice={setProductPrice}
              id={id}
              goodsId={goodsId}
            />
            <Detail
              price={price}
              discountRate={discountRate}
              name={name}
              description={description}
              goodsId={goodsId}
              setProductPrice={setProductPrice}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

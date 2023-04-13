import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import OrderInfo from './orderInfo/OrderInfo';
import PayInfo from './PayInfo/PayInfo';
import './Payment.scss';

const Payment = () => {
  const location = useLocation();
  // const [cartList, setCartList] = useState(location.state);
  const cartList = location.state;

  console.log(cartList);

  useEffect(() => {
    const cartList = location.state;
  }, []);

  const [completeAll, setCompleteAll] = useState({});

  const postPayInfo = (receipt, price) => {
    fetch(`http://10.58.52.91:3000/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY4MTM1MzI5NX0.0wHFSR9MKEZx2ZcrtipxU3i83e6-eQ5DwFq-EDeaVRM',
      },
      body: JSON.stringify({
        totalPrice: price,
        carts: receipt,
      }),
    })
      .then(res => res.json())
      .then(data => setCompleteAll(data), alert('완료되었습니다.'));
  };
  console.log(completeAll);

  return (
    <div className="payment">
      <div className="paymentTitle">결제하기</div>

      <div className="bodyWrap">
        <div className="formPayment">
          <div className="info">
            <OrderInfo cartList={cartList} />
          </div>
        </div>
        <div>
          <PayInfo cartList={cartList} postPayInfo={postPayInfo} />
        </div>
      </div>
    </div>
  );
};

export default Payment;

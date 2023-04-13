import React, { useState } from 'react';
import './OrderInfo.scss';
import { BsChevronUp } from 'react-icons/bs';
import { BsChevronDown } from 'react-icons/bs';

const OrderInfo = ({ cartList }) => {
  const [show, setShow] = useState(false);

  const [payInfo, setPayInfo] = useState({
    customerName: '',
    customerNumber: '',
    receiverName: '',
    recieverNumber: '',
    receiverAddress: '',
  });
  const onChange = e => {
    const { name, value } = e.target;
    setPayInfo({ ...payInfo, [name]: value });
  };
  const {
    customerName,
    customerNumber,
    receiverAddress,
    receiverName,
    recieverNumber,
  } = payInfo;

  return (
    <div className="orderInfo">
      <div className="bothSide">
        <div className="senderInfo">
          <p className="subject">주문고객정보</p>

          <div className="right">
            {show ? (
              <BsChevronUp onClick={() => setShow(!show)} />
            ) : (
              <BsChevronDown onClick={() => setShow(!show)} />
            )}
          </div>
        </div>
        {show ? (
          <div className="userInfo">
            <div className="name">
              <p className="text">이름</p>
              <input
                name="customerName"
                className="text input"
                type="text"
                placeholder="이름"
                value={customerName}
                onChange={onChange}
              />
            </div>

            <div className="phone">
              <p className="number">휴대번호</p>
              <input
                value={customerNumber}
                name="customerNumber"
                className="number input"
                type="text"
                placeholder="  '-' 없이 휴대폰번호 입력 "
                onChange={onChange}
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="bothSide">
        <p className="subject">배송지 정보</p>
      </div>
      <div className="userInfo">
        <div className="name">
          <p className="text">받는 분</p>
          <input
            name="receiverName"
            className="text input"
            type="text"
            placeholder="이름"
            value={receiverName}
            onChange={onChange}
          />
        </div>
        <div className="phone">
          <p className="number">연락처</p>
          <input
            value={recieverNumber}
            name="ReceiverNumber"
            className="number input"
            type="text"
            placeholder="'-' 없이 휴대폰번호 입력 "
            onChange={onChange}
          />
        </div>
        <div className="name">
          <p className="text">주소</p>
          <input
            value={receiverAddress}
            name="ReceiverAddress"
            className="text input"
            type="text"
            placeholder="상세주소 입력"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="goodsInfo">
        <p className="giftSign">선물상품 확인</p>
        <p className="generalGift"> 일반 상품</p>
        <div className="goodsTotal">
          <div className="leftGoodsDetail">
            <img
              className="goodsImg"
              src="https://ifh.cc/g/KLThjK.jpg"
              alt="goodsImg"
            />
            <span>세작 20매</span>
          </div>

          <div>
            <div className="rightGoodsDetail">
              <span>28,000원</span>
              <span>/ 1개</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderInfo;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartItems } from './CartItems';
import { PriceInfo } from './PriceInfo';
import './Cart.scss';

const Cart = () => {
  const [lists, setLists] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  useEffect(() => {
    fetch('http://10.58.52.91:3000/carts/list', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY4MTIyMDY5Nn0.jcEr96OmCN5gv239vBcOYsUv8mXmrV0Oodn1tfcWG8A',
      },
    })
      .then(res => res.json())
      .then(data => setLists(data));
  }, []);

  const selectAll = checked => {
    if (checked) {
      const idArray = [];
      lists.map(item => idArray.push(item.productId));
      setCheckedItems(idArray);
    } else {
      setCheckedItems([]);
    }
  };

  const checkingBox = (check, product) => {
    if (check) {
      setCheckedItems([...checkedItems, product.productId]);
    } else {
      setCheckedItems(
        checkedItems.filter(checkedItem => checkedItem !== product.productId)
      );
    }
  };

  const onChangeProps = (id, key, value) => {
    setLists(prevState => {
      return prevState.map(items => {
        if (items.productId === id) {
          return { ...items, [key]: value };
        } else {
          return { ...items };
        }
      });
    });
  };

  const selectDel = () => {
    setLists(prevState => {
      return prevState.filter(items => {
        return !checkedItems.includes(items.productId);
      });
    });
  };

  return (
    <div className="cart">
      <section className="cartBanner">
        <div className="cartTitle">
          <h2 className="titleText">장바구니</h2>
        </div>
      </section>
      <section className="cartInner">
        <div className="cartList">
          <CartItems
            lists={lists}
            setLists={setLists}
            selectAll={selectAll}
            checkingBox={checkingBox}
            onChangeProps={onChangeProps}
            selectDel={selectDel}
            checkedItems={checkedItems}
            setCheckedItems={setCheckedItems}
          />
          <div className="orderBtnContainer">
            <div className="upperBtnBox">
              <button>
                <Link to="/Payment" className="linkBtnStyle">
                  선택상품 주문
                </Link>
              </button>
              <button>
                <Link to="/Gift" className="linkBtnStyle">
                  선택상품 선물하기
                </Link>
              </button>
            </div>
            <div className="bottomBtnBox">
              <button>
                <Link to="/Payment" className="linkBtnStyle">
                  전체상품 주문하기
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="priceInfoBox">
          <PriceInfo lists={lists} checkedItems={checkedItems} />
        </div>
      </section>
    </div>
  );
};

export default Cart;

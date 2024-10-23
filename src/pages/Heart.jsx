import React, { useState, useEffect } from "react";
import Categories from "../components/Categories";
import { useDispatch, useSelector } from "react-redux";
import { deleteHeart } from "../store/slices/heartSlices";
import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import close from '../assets/close.svg';

const Heart = () => {
  const dispatch = useDispatch();
  const { heart } = useSelector((state) => state.heart);
  
  const [counts, setCounts] = useState(heart.map(item => ({ id: item.id, count: 1 })));
  
  const [total, setTotal] = useState(0);

  const updateCount = (id, newCount) => {
    if (newCount < 1) return;
    setCounts(prevCounts =>
      prevCounts.map(item =>
        item.id === id ? { ...item, count: newCount } : item
      )
    );
  };

  useEffect(() => {
    const totalPrice = heart.reduce((acc, el) => {
      const itemCount = counts.find(item => item.id === el.id)?.count || 1;
      return acc + (el.price * itemCount);
    }, 0);
    setTotal(totalPrice);
  }, [heart, counts]);

  return (
    <div className="cart-container">
      <Categories />
      <div className="cart-second-container">
        <h2>Your Favorites</h2>
        <div className="cart-container-info-text">
          {heart.map(el => {
            const itemCount = counts.find(item => item.id === el.id)?.count || 1;

            return (
              <div className="cart-container-info" key={el.id}>
                <div className="cart-container-info-image">
                  <img style={{ width: 98, height: 47, borderRadius: 6 }} src={el.images[0]} alt="" />
                  <div>
                    <h3>{el.title.slice(0, 15)}</h3>
                    <p>{el.category.name}</p>
                  </div>
                </div>
                <h2>{el.price}$</h2>
                <div className="cart-container-counter">
                  <img onClick={() => updateCount(el.id, itemCount - 1)} src={minus} alt="" />
                  <p>{itemCount}</p>
                  <img onClick={() => updateCount(el.id, itemCount + 1)} src={plus} alt="" />
                </div>
                <div className="cart-container-info-close">
                  <h2>{el.price * itemCount}$</h2>
                  <img onClick={() => dispatch(deleteHeart(el.id))} src={close} alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <h2>TOTAL PRICE: {total}$</h2>
      </div>
    </div>
  );
};

export default Heart;

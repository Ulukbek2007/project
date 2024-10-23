import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductSlicesData } from "../store/slices/getProductSlices";
import { getValue } from "../store/slices/getCategoryNameSlices";
import loading from '../assets/loading.svg'
const Categories = () => {
  const dispatch = useDispatch();
  const [categories, setCategoties] = useState([]);
  const { data } = useSelector((state) => state.data);
  const value = useSelector(state => state.categoryValue.value)
  useEffect(() => {
    dispatch(getProductSlicesData());
  }, [dispatch]);
  const getCategory = () => {
    const category = data.map((el) => el.category.name);
    const uniqueCategory = [...new Set(category)];
    setCategoties(uniqueCategory);
  };
  useEffect(() => {
    if (data.length > 0) {
      getCategory();
    }
  }, [data]);
  return (
    <div className="category-catalog">
      {categories.length>0?<div><h2>CATEGORIES</h2>
        <div className="category-title">
          {categories.length > 0 &&
            categories.map((el) => (
              <p className={value === el ? 'importamt-category' : ''} key={el} onClick={(e) => dispatch(getValue(e.target.innerText))}>{el}</p>
            ))}
        </div>
        <div className="category-help"><p>Help</p><p>Terms & Conditions</p></div></div>:<img className='app-page-loading' src={loading} alt='ICON NOT FOUND' />}
    </div>
  );
};

export default Categories;

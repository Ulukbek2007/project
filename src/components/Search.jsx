import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchData } from "../store/slices/searchDataSlices";
import { Link } from "react-router-dom";
import { getSearchValue } from "../store/slices/searchValue";

const Search = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSearchData());
    }, [dispatch]);

    const data = useSelector((state) => state.search.data);
    const value = useSelector((state) => state.value.value).toLowerCase();

    const highlightText = (text, searchValue) => {
        if (!searchValue) return text;
        const regex = new RegExp(`(${searchValue})`, 'gi');
        return text.split(regex).map((part, index) => 
            part.toLowerCase() === searchValue.toLowerCase() 
                ? <span key={index} className="highlight">{part}</span> 
                : part
        );
    };

    return (
        <div className="search-container">
            {data.length > 0 && data.filter(el => el.title.toLowerCase().includes(value)).map(el => (
                <Link onClick={() => dispatch(getSearchValue(''))} className="search-container-cart" key={el.id} to={`/detail/:${el.id}/:${el.category.name}`}>
                    <p>{highlightText(el.title.length > 22 ? el.title.slice(0, 22) : el.title, value)}</p>
                    <img src={el.images[0].split('[').join().split(']').join('')} alt="" />
                </Link>
            ))}
        </div>
    );
};

export default Search;

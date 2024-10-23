import React, { useEffect } from 'react'
import logo from '../assets/logo.svg'
import userLogo from '../assets/userLogo.svg'
import search from '../assets/search.svg'
import heart from '../assets/heart.svg'
import cart from '../assets/cart.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Search from './Search'
import { getSearchValue } from '../store/slices/searchValue'
import { getSearchData } from '../store/slices/searchDataSlices'

const Header = () => {
    const navigate = useNavigate()

    const path = useSelector(state => state.path.path)
    const cartData = useSelector(state => state.cart.cart)
    const heartData = useSelector(state => state.heart.heart)
    const dispatch = useDispatch()
    const value = useSelector(state => state.value.value)
    useEffect(()=>{
        dispatch(getSearchData())
    },[dispatch])
    const data=useSelector(state=>state.search.data)
    return (
        <div className='header-container'>
            <div className='second-header-container'>
                <img onClick={() => navigate('/')} className={`header-container-logo ${path === '/' ? 'scaled' : ''}`} src={logo} alt="" />
                <div onClick={() => navigate('/user')} className='header-container-user'>
                    <img className={path === '/user' ? 'scaled' : ''} src={userLogo} alt="" />
                    <p>Yana Tamkovich</p>
                </div>
                <div>
                <div className='header-container-search'>
                    <img src={search} alt="" />
                    <input value={value} onChange={(e) => dispatch(getSearchValue(e.target.value))} placeholder='Search for anything...' type="text" />
                    
                </div>
                {value.length>0&&data.length>0?<Search/>:null}
                </div>
                <div className='header-container-heart-cart'>
                    <img className={path === '/heart' ? 'scaled' : ''} onClick={() => navigate('/heart')} src={heart} alt="" />
                    {heartData.length > 0 && <p className='heart-count-length'>{heartData.length}</p>}
                    <img className={path === '/cart' ? 'scaled' : ''} onClick={() => navigate('/cart')} src={cart} alt="" />
                    {cartData.length > 0 && <p className='cart-count-length'>{cartData.length}</p>}
                </div>
            </div>
        </div>
    )
}

export default Header
import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetailProductData } from '../store/slices/getDetailProductSlices'
import { getDataCart } from '../store/slices/cartSlices'
import { getDataHeart } from '../store/slices/heartSlices'
import loading from '../assets/loading.svg'
const Detail = () => {
    const params = useParams()
    const id = params.id.split(':').join('')
    const { cart } = useSelector(state => state.cart)
    const {heart } = useSelector(state => state.heart)
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    const { data } = useSelector(state => state.detailData)
    const detailData=data.filter(el=>el.id==id)
    const [less, setLess] = useState(false)
    useEffect(() => {
        dispatch(getDetailProductData())
    }, [dispatch])

const filterCartProduct=(el,id)=>{
    const findId=cart.filter(el=>el.id===Number(id)).length
    if (findId===0) {
        dispatch(getDataCart(el))
    }
}
const filterHeartProduct=(el,id)=>{
    const findId=heart.filter(el=>el.id===Number(id)).length
    if(findId===0){
        dispatch(getDataHeart(el))
    }
}
    return (
        <div className='detail-container'>
            <div className='detail-second-container'>
                <Categories />
                <div className='detail-throud-container'>
                    {data.length > 0 ? <div className='detail-cart-container'>
                        <div className='detail-cart-img-one-banner'>
                            {data.length > 0 && data.filter(el => el.id == id).map(el => (
                                <div key={el.id} className='detail-cart-container-important-img'>
                                    <img className='detail-cart-important-img' src={el.images[value]} alt="" />
                                    {el.images.length > 0 && <div className='detail-cart-container-friend-important-img'>
                                        {el.images.map((el, index) => (
                                            <img key={index} className={`${index == value ? 'detail-friend-img' : ''}`} onClick={() => setValue(index)} src={el} alt="" />
                                        ))}
                                    </div>}
                                </div>
                            ))}
                        </div>
                        <div className='detail-cart-img-two-banner'>
                            {data.filter(el=>el.id==id).map(el => (
                                <div key={el.id} className='detail-cart-banner-two-info-text'>
                                    <p className='detail-cart-banner-two-info-text-category'>{el.title}</p>
                                    <div>
                                        <p className='detail-cart-banner-two-info-text-price'>{el.price}$</p>
                                        <p className='detail-cart-banner-two-info-text-price-sale'>{el.price + 20}$</p>
                                    </div>
                                    <p className='detail-cart-banner-two-info-text-description'>{el.description}</p>
                                    <div style={{ display: 'flex', gap: 10 }}>
                                        <button onClick={() => filterCartProduct(el,el.id)} className={`add-to-cart`}>Add to cart</button>
                                        <button onClick={() => filterHeartProduct(el,el.id)} className={`add-to-favorites`}>Add to favorites</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> : <img className='app-page-loading' src={loading} alt='ICON NOT FOUND' />}
                </div>
            </div>
            <div className='detail-related-container'>
                {data.length > 0 ? <div className='detail-related-second-container'>
                    <h2>Related products</h2>
                    <div className='detail-container-cart'>
                        {!less ? data.filter(el => el.id != id&&el.category.name==detailData.map(el=>el.category.name)).slice(0, 5).map((el) => (
                            <div key={el.id} className='detail-related-cart'>
                                <Link onClick={()=>setValue(0)} to={`/detail/:${el.id}/:${el.title}`} className='detail-cart-to-detail'>
                                    <img src={el.images[0]} alt="" />
                                    <div >
                                        <div >
                                            <h2>{el.category.name}</h2>
                                            <p>{el.title.length > 20 ? `${el.title.slice(0, 20)}...` : el.title}</p>
                                        </div>
                                        <div className='detail-cart-product-price'><h2>{el.price}$</h2><h4>{el.price + 20}$</h4></div>
                                    </div>
                                </Link>
                            </div>
                        )) : data.filter(el => el.id != id&&el.category.name==detailData.map(el=>el.category.name)).map((el) => (
                            <div className='detail-related-cart' key={el.id}>
                                <Link to={`/detail/:${el.id}/:${el.title}`} className='detail-cart-to-detail'>
                                    <img src={el.images[0]} alt="" />
                                    <div >
                                        <div >
                                            <h2>{el.category.name}</h2>
                                            <p>{el.title.length > 25 ? `${el.title.slice(0, 20)}...` : el.title}</p>
                                        </div>
                                        <div className='detail-cart-product-price'><h2>{el.price}$</h2><h4>{el.price + 20}$</h4></div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <button className='button' onClick={() => setLess(!less)}>{!less ? 'See more' : 'See less'}</button>
                </div> : <img className='app-page-loading' src={loading} alt='ICON NOT FOUND' />}
            </div>
        </div>
    )
}

export default Detail
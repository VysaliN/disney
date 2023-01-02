import React from 'react'
import { useLocation } from 'react-router-dom';


const Trailer=() =>{
    const location = useLocation()
    console.log('hello')
    console.log(location.state.m_key)
    return (
        <div></div>
    )
}

export default Trailer
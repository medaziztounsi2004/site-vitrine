/* eslint-disable */
/* @ts-nocheck */

import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/Product_Cart.png'
import list_product_icon from '../../assets/Product_list_icon.png'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                <img src={add_product_icon} className='product_icon' alt="" />
                <p>Add Product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
    <div className='sidebar-item'>
        <img src={list_product_icon} className='list_product' alt='' />
        <p>Product List</p>
    </div>
   </Link>


    </div>
  )
}

export default Sidebar

import React from 'react'
import { Routes, Route , NavLink  } from 'react-router-dom'
import { Sidebardata } from './Sidebardata'

import Products from "../../components/Products";
import Category from '../../components/Category';
import Shop from '../../components/Shop';
import ManageOrders from '../../components/ManageOrders'
import SubCategory from '../../components/SubCategory';







function Sidebar()  {
  return (
    <div className='App'>
        
          
        <Routes>
            <Route path='/orders' element={<ManageOrders/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path='/addproducts' element={<Products/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/subcategory' element ={<SubCategory/>}/>
        </Routes>
       
      
        <div className='sidebar-container'>
        <h2 className='sprint'>Sprint</h2>
            <ul className='nav-list'>

                {Sidebardata.map((item, index) => {
                    return(
                        <li className='nav-item' key={index}>
                            <NavLink to={item.path} className={({isActive}) => ["nav-link" , isActive ? "active" : null].join(" ")}>
                                
                             <div id='nav-link-icon'>
                                {item.icon}
                                </div>
                             <div id='title'>{item.title}</div>
                             
                            </NavLink>
                        </li>
                    )

                })}

            </ul>
        </div>
       
       

    </div>
  )
}

export default Sidebar
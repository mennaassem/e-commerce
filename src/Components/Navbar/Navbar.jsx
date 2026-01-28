import { faAddressCard, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBabyCarriage, faBars, faBarsProgress, faBolt, faCartShopping, faChevronDown, faEllipsis, faEnvelope, faMagnifyingGlass, faPerson, faPersonDress, faPhone, faRightFromBracket, faUserPlus, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router'
import { Link, Links } from 'react-router'

export default function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  function toggleMenue(){
    setIsOpen(!isOpen)
  }
  return (
    <>
    <header>
      <div className="container">
        {/* Top Navbar */}
        <div className='hidden lg:flex py-2 text-sm items-center justify-between  border-b border-gray-300/30 text-gray-600'>
          <ul className='flex items-center justify-center gap-4'>
            <li className='flex items-center justify-center gap-2'><FontAwesomeIcon icon={faPhone} />
            <a href='tel:+1 (800) 123-4567'>+1 (800) 123-4567</a>
            </li>
            <li className='flex items-center justify-center gap-2'>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href='mileto:Support@freshcart.com'>Support@freshcart.com</a>
            </li>
          </ul>
           <ul className='flex items-center justify-center gap-3'>
             <li>
              <Link to={`trak-order`}>Trak order</Link>
             </li>
              <li>
              <Link to={`About`}>About</Link>
             </li>
              <li>
              <Link to={`Contact`}>Contact</Link>
             </li>
              <li>
              <select>
                <option>EGP</option>
                <option>SAR</option>
                <option>AED</option>
              </select>
             </li>
              <li>
               <select>
                <option>العربيه</option>
                <option>ُEnglish</option>
              </select>
             </li>
          </ul>
        </div>
        {/* main navigation */}
        <nav className='flex items-center justify-between py-5'>
          <h1>
            <Link className='flex items-center text-2xl font-bold' to={`/`}>
            <FontAwesomeIcon className='text-primary-600' icon={faCartShopping} />
            <h2 className='text-primary-600'>Fresh<span className='text-black'>Cart</span></h2>
            </Link>
          </h1>
          <search className='relative hidden lg:flex'>
            <input type='text' className='form-control min-w-96' placeholder='Search for products'/>
            <FontAwesomeIcon className='absolute right-2 top-1/2 -translate-1/2'  icon={faMagnifyingGlass} />
          </search>
          <ul className='hidden lg:flex items-center justify-between gap-6'>
            <li>
              <NavLink className={({isActive})=>{
                return `${isActive ? 'text-primary-600' : ''} flex flex-col items-center gap-2 hover:text-primary-600 transition-color duration-200 `
              }} to={`wishlist`}>
              <FontAwesomeIcon className='text-lg' icon={faHeart} />
              <span className='text-sm'>WishList</span>
              </NavLink>
            </li>
             <li>
              <NavLink className= {({isActive})=>{
                return `${ isActive ? 'text-primary-600' : ''} flex flex-col items-center gap-2 hover:text-primary-600 transition-color duration-200`
              }} to={`cart`}>
                <div className='relative'>
                   <FontAwesomeIcon className='text-lg' icon={faCartShopping} />
                  <span className='absolute  -top-2 -right-3 bg-primary-600 rounded-full size-5 flex items-center justify-center text-sm text-white'>3</span>
                </div>
              
              <span className='text-sm'>Cart</span>
              </NavLink>
            </li>
             <li>
              <NavLink className= {({isActive})=>{
                return `${ isActive ? 'text-primary-600' : ''} flex flex-col items-center gap-2 hover:text-primary-600 transition-color duration-200`
              }} to={`acount`}>
              <FontAwesomeIcon className='text-lg' icon={faUser} />
              <span className='text-sm'>Account</span>
              </NavLink>
            </li>
             <li>
              <NavLink className= {({isActive})=>{
                return `${ isActive ? 'text-primary-600' : ''} flex flex-col items-center gap-2 hover:text-primary-600 transition-color duration-200`
              }} to={`signup`}>
             <FontAwesomeIcon className='text-lg' icon={faUserPlus} />
              <span className='text-sm'>Signup</span>
              </NavLink>
            </li>
             <li>
              <NavLink className= {({isActive})=>{
                return `${ isActive ? 'text-primary-600' : ''} flex flex-col items-center gap-2 hover:text-primary-600 transition-color duration-200`
              }} to={`login`}>
              <FontAwesomeIcon className='text-lg' icon={faAddressCard} />
              <span className='text-sm'>Login</span>
              </NavLink>
            </li>
              <li className="flex flex-col items-center gap-2 hover:text-primary-600 transition-color duration-200">
              
              <FontAwesomeIcon className='text-lg' icon={faRightFromBracket} />
              <span className='text-sm'>Logout</span>
              
            </li>
          </ul>
            <button onClick={toggleMenue} className='btn lg:hidden bg-primary-600  text-white'>
           {isOpen ? <FontAwesomeIcon icon={faXmark} />  : <FontAwesomeIcon icon={faBars} />}
          </button>
          
        </nav>
      </div>
      {/* category Navigation */}
      <nav className='hidden lg:block bg-gray-100 py-2'>
        <div className="container flex items-center gap-8 ">
          <div className='relative group'>
             <button className='btn flex items-center justify-between gap-3 bg-primary-600 text-white hover:bg-primary-700'>
            <FontAwesomeIcon icon={faBars} />
            <span>All Categories</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <menu className=' hidden group-hover:block bg-white shadow-xl left-1 top-10 rounded-lg absolute'>
            <ul className=' *:px-2 *:py-2  *:flex *:items-center *:gap-2 *:hover:bg-gray-300/30'>
              <li  className='border-b border-gray-200 '>
                
                <FontAwesomeIcon className='text-primary-600' icon={faPerson} />
                <span> Men's Fashions</span>
              </li>
                <li className='border-b border-gray-200 pb-1'>
                 
               <FontAwesomeIcon className='text-primary-600' icon={faPersonDress} />
               <span> Wonan's Fashions</span>
              </li>
                  <li className='border-b border-gray-200 pb-1'>
                    <FontAwesomeIcon className='text-primary-600' icon={faBabyCarriage} />
                <span>Baby & Toys</span>
              </li>
                  <li className='border-b border-gray-200 pb-1'>
                     <FontAwesomeIcon className='text-primary-600' icon={faBolt} />
                <span>Electronics</span>
              </li>
                  <li>
                    <FontAwesomeIcon className='text-primary-600' icon={faEllipsis} />
                <span>View All Categorues</span>
              </li>
            </ul>
          </menu>
          </div>
          <ul className='flex items-center gap-4'>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
             <li>
              <Link to={`shop`}>Shop</Link>
            </li>
             <li>
              <Link to={`deals`}>Deals</Link>
            </li>
             <li>
              <Link to={`brands`}>Brands</Link>
            </li>
             <li>
              <Link to={`/`}>Home</Link>
            </li>
          </ul>
        </div>

      </nav>
      {/* OffCanvas */}
     {isOpen && <>
       <div className='background fixed inset-0 bg-black/50 z-30' onClick={toggleMenue}></div>
      <div className=" offcanvas bg-white fixed z-40 top-0 bottom-0 p-5 space-y-4">
        <div className='flex items-center justify-between border-b-2 border-b-gray-300/50 pb-4'>
           <h1>
            <Link className='flex items-center text-2xl font-bold' to={`/`}>
            <FontAwesomeIcon className='text-primary-600' icon={faCartShopping} />
            <h2 className='text-primary-600'>Fresh<span className='text-black'>Cart</span></h2>
            </Link>
          </h1>
          <button className=' btn bg-primary-600  text-white' onClick={toggleMenue}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
         <search className='relative'>
            <input type='text' className='form-control min-w-96' placeholder='Search for products'/>
            <FontAwesomeIcon className='absolute right-2 top-1/2 -translate-1/2'  icon={faMagnifyingGlass} />
          </search>
          <div className='space-y-2'>
            <h2 className='font-bold'>Main Menu</h2>
            <ul className='space-y-2  *:hover:bg-gray-100'>
             <li>
              <NavLink to={`wishlist`} className={({isActive})=>{
                return `${isActive ? 'text-primary-600 bg-primary-100' : ''} flex items-center gap-2 hover:text-primary-600 transition-color duration-200 py-2 px-2 `
              }}>
                 <FontAwesomeIcon className='text-lg' icon={faHeart} />
              <span className='text-sm'>WishList</span>
              </NavLink>
             </li>
               <li>
              <NavLink to={`cart`} className={({isActive})=>{
                return `${isActive ? 'text-primary-600 bg-primary-100' : ''} flex items-center gap-2 hover:text-primary-600 transition-color duration-200 py-2 px-2  `
              }}>
              <div className='relative'>
                   <FontAwesomeIcon className='text-lg' icon={faCartShopping} />
                  <span className='absolute  -top-2 -right-2 bg-primary-600 rounded-full size-5 flex items-center justify-center text-sm text-white'>3</span>
                </div>
              <span className='text-sm'>Cart</span>
              </NavLink>
             </li>
                 <li>
              <NavLink to={`account`} className={({isActive})=>{
                return `${isActive ? 'text-primary-600 bg-primary-100' : ''} flex items-center gap-2 hover:text-primary-600 transition-color duration-200 py-2 px-2  `
              }}>
              <FontAwesomeIcon className='text-lg' icon={faUser} />
              <span className='text-sm'>Account</span>
              </NavLink>
             </li>
            </ul>
            <div  className='space-y-2 border-t-2 border-gray-300/50 pt-5'>
              <h2 className='font-bold'>Account</h2>
              <ul className='space-y-3   *:hover:bg-gray-100'>
                <li>
                  <NavLink  to={`signup`} className={({isActive})=>{
                return `${isActive ? 'text-primary-600 bg-primary-100' : ''} flex items-center gap-2 hover:text-primary-600 transition-color duration-200 py-2 px-2  `
              }}>
                     <FontAwesomeIcon className='text-lg' icon={faUserPlus} />
              <span className='text-sm'>Signup</span>
                  </NavLink>
                </li>
               <li>
                <NavLink  to={`login`} className={({isActive})=>{
                return `${isActive ? 'text-primary-600 bg-primary-100' : ''} flex items-center gap-2 hover:text-primary-600 transition-color duration-200 py-2 px-2  `
              }}>
                    <FontAwesomeIcon className='text-lg' icon={faAddressCard} />
              <span className='text-sm'>Login</span>
                </NavLink>
               </li>
               <li className="flex  items-center gap-2 hover:text-primary-600 transition-color duration-200 py-2 px-2 ">
                <FontAwesomeIcon className='text-lg' icon={faRightFromBracket} />
              <span className='text-sm'>Logout</span>
               </li>
              </ul>
            </div>

          </div>

      </div>
     </>}
    </header>
    
    
    
    
    
    
    
    </>
  )
}

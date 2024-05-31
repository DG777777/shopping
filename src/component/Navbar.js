import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


   const menuList = [
    '남성', 
    'Divided', 
    '여성', 
    '신생아/유아', 
    '아동', 
    'Home', 
    'Sale', 
    '지속가능성'
   ];
   
   const navigate = useNavigate();

   const goToLogin = () => {
    navigate("/login")
   }

   const search = (event) => {
     if(event.key === "Enter"){
        //입력한 검색어를 읽어와서
        let keyword = event.target.value;
        
        //url을 바꿔준다.
        navigate(`/?q=${keyword}`)
     }
   };

   const homeGo = () => {
    navigate("/");
  }



  return (
    <div>
        <div>
            <div className='login-button' onClick={goToLogin}>
               <FontAwesomeIcon icon={faUser}/>
               <div>로그인</div>
            </div>      
        </div>
      
        <div className='nav-section'>
           <img onClick={homeGo} width={100} src='https://image.edaily.co.kr/images/photo/files/NP/S/2023/07/PS23071900190.jpg' alt=''/>
        </div>

        <div className="menu-area"> 
              <ul className='menu-list'>
                {menuList.map((menu,idx) => (
                <li key={idx}>{menu}</li>
               ))}
              </ul>
        
         <div className='search-box'>
             <FontAwesomeIcon icon={faSearch}/>
             <input type='text' onKeyDown={search}/>

         </div>
           
        </div>
    </div>
  )
}

export default Navbar
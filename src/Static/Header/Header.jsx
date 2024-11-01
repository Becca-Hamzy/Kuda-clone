import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components"
// import logo from "/Kudalogo.png"
import flag from "../../assets/svg/Flag_of_Nigeria.svg"
import kuda from "../../assets/svg/images.png"
import { IoReorderTwoOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";



 

const Header = ()=> {

    const [toggle, setToggle] = useState(false)
       const touchToggle = () => {
         setToggle (!toggle);
       }
    return(
        <>
        <Container>
            <LogoNav>
                <Logo>
                    <img src= {kuda} alt="" />
                </Logo>
                <Navigation>
                <nav>
                    <Link to="/">
                    <span>Personal</span>
                    <IoMdArrowDropdown />
                    </Link>
                    <Link to="/business">
                    <span>Business</span>
                    <IoMdArrowDropdown />
                    </Link>
                    <Link to="/company">
                    <span>Company</span>
                    <IoMdArrowDropdown />
                    </Link>
                    <span>Help</span>
                    <IoMdArrowDropdown />
                </nav>
                </Navigation >   
            </LogoNav>
            <Button>
                 <SignBtn>Sign In</SignBtn>
                 <JoinBtn> Join Kuda </JoinBtn>
                 <ContBtn>
                    <img className="ngn" src={flag} alt="" />
                 </ContBtn>
                

                 <SideNav onClick={touchToggle}>
                   <IoReorderTwoOutline />

            </SideNav>

            </Button>
           
          </Container>
         {toggle === false? null : <SideBar toggle = {toggle} setToggle={setToggle}/> }
         </>
    )
}
export default Header


const Container = styled.div`
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
   /* border: 2px solid green; */

   
   @media (max-width: 800px){
        /* border: 2px solid green; */
        width: 100%;
        /* justify-content: space-around; */
     }
   

`
const LogoNav = styled.div`
      display: flex;
      gap: 100px;
      color: #8d76a8;
      font-weight: 700;  
      font-size: 13px;
   

`
const Logo = styled.div`
   img{
     width:80px ;
     margin-left: 50px;
   }

   @media (max-width: 800px){
    margin-left: 0px;

   }

`
const Navigation = styled.div`
     display: flex;
     gap: 50px;
     align-items: center;

     @media (max-width: 800px){
       display: none;
     }
    
    nav{
        display: flex;
        align-items: center;
        span{
            margin-left: 60px;

        }
    }
    @media (max-width: 800px){
      

        span{
            margin-left: 0px;

        }
    }
        
        
        
        
`
const Button = styled.div`
    border: none;
    display: flex;
    gap: 20px;
    margin-right: 50px;
    align-items: center;
    @media (max-width: 800px) {

    }

`
const JoinBtn = styled.button`
    font-size: 15px;
    background-color: #40196D;
    color: white;
    border-radius: 10px;
    width: 150px;
    height: 35px;
    text-decoration: center;
    font-weight: 600;
    border: none;

    @media (max-width: 800px) {
        display: none;
        
    }

`
const ContBtn = styled.button`
border-radius:50% ;
background-color: #d8e6d8;
height: 30px;
width: 30px;
display: flex;
align-items: center;
justify-content: center;
border: none;
  .ngn{
    width: 20px;

  }

  @media(max-width: 800px){
   margin-left: 0px;
}
    
`
const SignBtn = styled.button`
border: none;
background-color: white;
color: #8d76a8;
font-weight: 900;

@media(max-width: 800px){
    display: none;

}
    
`
const SideNav = styled.div`
   
    display: none;
   
   
  
    @media(max-width: 800px){
    display: block;
    margin-right: 0px;
    cursor: pointer;


}
    

`
import styled from "styled-components"
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import KudaImg from "../../../assets/svg/KDimg.jpeg"






const Hero = () => {
    return(
       <Container>
           <Flex>
              <TextCont>
                   <h1>
                       The money app for Africans.
                   </h1>
                   <p>
                        Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.  
                  </p>
                  <button>
                        <FaApple />
                        <span> Download on <br /> App STORE</span> 
                  </button>
                  <button>
                        <FaGooglePlay />
                         <span>GET IT ON <br /> Google App</span> 
                  </button>
               
              </TextCont>
              <ImgCont>
                    <img src= {KudaImg} alt="" />
              
              </ImgCont>

           </Flex>
       </Container>


    )
}

export default Hero

const Container = styled.div`
    width: 1280px;
    /* border: 1px solid; */
    margin-right: auto;
    margin-left: auto;
    padding: 0px, 10px;
    min-height: calc(100px - 70px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 60px;
    /* border: 2px solid blue; */

    button{
        margin-left: 10px;
    }

    @media(max-width: 800px){
        width: 100%;
        padding-left: 5px;



    }
`
const Flex = styled.div `
    display: flex;
    width: 85%;
    /* border: 1px solid blue; */
    align-items: center;
    justify-content: space-between;

    @media(max-width: 800px){
        display:flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        align-items: flex-start;
    }

`
const TextCont = styled.div`
    /* max-width: 450px;   */

    @media(max-width: 800px){
        max-width: 100%;
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        /* border: 2px solid yellow */


    }
  

    h1{
        color:#40196d;
        font-size: 40px;
        font-weight: 800;


     @media(max-width: 800px){
        font-size: 30px;
        color:#40196d;
        text-align: center;
        width: 350px;
        /* border: 1px solid; */


    }
      }

    p{
        font-size: 18px;
        text-align: justify;
        width: 400px;

        @media(max-width: 800px){
        text-align: center;
        font-size: 15px;
        width: 300px;


      }
      }
      button{
        height: 40px;
        width: 120px;
        border-radius: 5px;
        background-color: black;
        color: white;
        margin-top: 20px;


    }
    
`
const ImgCont = styled.div`
padding-right: 110px;
   img{
    width: 400px;
    margin-top: 20px ;
    margin-right: 20px ;
   }



`


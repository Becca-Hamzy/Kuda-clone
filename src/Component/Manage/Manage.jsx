import styled from "styled-components"


const Manage = ({img, text, p})=>{
   return(
    <Subs>
    <ImgCont> <img src = {img} alt="" /></ImgCont> 
    <Text> <h1>{text}</h1> <p>{p}</p> </Text>
                  
      
  </Subs>

   )

}
export default Manage


const Subs = styled.div`
 display:flex;
 /* border: 1px solid; */
 width: 100%;
 margin-left: -200px;
 gap: 70px;
 justify-content: center;
 align-items: center;
 margin-bottom:-10px;
 

@media(max-width: 800px){
       margin-top: 800px ;
       display: flex;
       flex-direction: column;
       width: 100%;
       margin-left: 0px ;
       /* border: 1px solid; */





       img{

        width: 400px;
        margin-left: 190px ;

       }
 

    }


`
const ImgCont = styled.div`
margin-left: 500px;
@media(max-width: 800px){
    margin-right: 1230px ;
    width: 50px;



}



`

const Text = styled.div`
    /* border: 1px solid; */
    width: 500px;
    margin-left: 40px ;

    @media(max-width: 800px){
        width: 100%;
        text-align: center;
        margin-left: -16px ;



    }


h1{
    /* border: 1px solid; */
    width: 400px;
    font-size: 30px;
    color: #40196d;
    font-weight: 800;
    line-height: 40px;

    @media(max-width: 800px){
        font-size: 25px;
        text-align: center;


    }
   }
   p{
    font-size: 15px;
    font-weight: 500;


    @media(max-width: 800px){
        text-align: center;
        margin-left: 30px;
        font-size: 13px;
        width: 350px;


     

    }
   }

`
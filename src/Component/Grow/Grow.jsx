
import styled from "styled-components"
const Grow = ({img, text, p}) => {
   return(
     <Container>
           <img src= {img} alt="" />
           <h1>{text}</h1>
           <p>{p}</p>



     </Container>


   )

}

export default Grow

const Container = styled.div`
    /* border: 1px solid; */
    width: 300px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;


    @media(max-width: 800px){
       width: 400px;

    }

    img{
        margin: 20px;

    }
    h1{
        font-size: 20px;
        margin-left: 20px;
        color: #40196d;
        font-weight: 800;

    }
    p{
        margin-left: 20px;
        font-size: 15px;
        text-decoration: justify;

        @media(max-width: 800px){
            
           

        }
    }




`
import footerImg from "../../assets/svg/footerImg.jpeg"
import styled from "styled-components"

const KudaArica = () =>{
    return(
        <KudaImg>
            <img src= {footerImg} alt="" />

        </KudaImg>
    )
}

export default KudaArica


const KudaImg = styled.div`
   text-align: center;    
   margin-top: 50px;


   @media(max-width: 800px){
      img{
          width: 400px;

      }

   }

`

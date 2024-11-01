import styled from "styled-components"
import tc from "../../assets/svg/TC.jpeg"
const Badge = ({img}) => {
   return(
      
      <BargeImg>
          <img src= {img} alt="" />

      </BargeImg>



   )

}
export default Badge 
   
   

const BargeImg = styled.div`
       @media(max-width: 800px){
          width: 30px;
       }


`

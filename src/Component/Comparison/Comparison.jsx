import compare from "../../assets/svg/compare.jpeg" 
import styled  from "styled-components"

const Comparison = () =>{
  return(
    <Comp>
      <Compare>

        <img src= {compare} alt= "" />

      </Compare>
    </Comp>  

  )

}
export default Comparison


const Compare = styled.div`
    text-align: center;
    margin-top: 20px;
    /* border: 1px solid; */



    @media(max-width: 800px){
      img{
        width: 400px;
        

      }
      
      


    }
` 
const Comp = styled.div``
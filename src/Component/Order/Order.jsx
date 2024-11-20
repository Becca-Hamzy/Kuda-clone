import img1 from "../../assets/svg/order.jpg"
import styled from "styled-components"

const Order = ({img,text}) => {
    return(
 
      <Comp>  
            <img src={img} alt=""/>
            <p>{text}</p>

       </Comp>
   )
}

export default Order


const Comp = styled.div`
    /* border:1px solid; */
    width: 350px;
    height: 150px;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    font-weight: 700;
    padding: 20px;
   
    @media(max-width: 800px){
        height: 100px;
        font-size: 13px;
        width:100%;
        margin:5px;
        border:1px solid;


    }
`

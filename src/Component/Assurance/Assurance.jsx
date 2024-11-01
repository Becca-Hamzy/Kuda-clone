import styled from "styled-components"


const Assurance = ({text}) => {
  return(
    <Assur>
    <Text><h1>{text}</h1></Text>
    </Assur>

  )


}
export default Assurance

const Assur = styled.div`
    text-align: center;
    font-size: 10px;
    font-weight: 800;
    margin-top: 100px;
    /* border: 1px solid; */
    
    h1{
        font-weight: 800;
        color: #53307c;
    }


    @media(max-width: 800px){
      
      font-size: 8px;
      /* border: 1px solid; */


    }

`
const Text = styled.div`
  

`
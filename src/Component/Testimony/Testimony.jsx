// import "./Testimony.css"
import styled from "styled-components"


const Testimony = ({text,p})=>{
    return(
    <>
        
        <Testimonials>
        <div className="scroll-content">
       <Text>{text}</Text>
        <p>{p}</p>
        </div>
       </Testimonials>
            
      </> 

    )

}

export default Testimony
const Testimonials = styled.div`
    width: 100%;
    border-radius: 5px;    
    display: flex;
    box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
    border: none;
    padding-top: 20px;
    overflow: hidden;
    position: relative;
    animation: mymove 5s infinite;


    @keyframes mymove {
        from{
            right:0px;
        } 
        to {
            right: 200px;
        }
       
      
    }
    @media(max-width: 800px){
      width: 100%;
    }  

`
const Text = styled.div`
        font-size: 12px;
        margin: auto;
        width: 90%;
         
`


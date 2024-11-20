 import Kuda from "../../assets/svg/images.png"
 import styled from "styled-components"
 
 
 const Footer = ()=>{
    return(
    
        <Container>
            <Kud>
                <img src= {Kuda} alt="" />
            </Kud>

            <Per>
                <h5>Personal</h5>
                <p>Discover Personal</p>
                <p>Transfer & Spend</p>
                <p>Save</p>
                <p>Investments</p>
                <p>Kuda card</p>
            </Per>
          <Bus>
            <h5>Business</h5>
            <p>Discover Business</p>
            <p>Business Registration</p>
            <p>softPOS</p>
            <p>Invoicing</p>
            <p>POS Machine</p>
            <p>Business Loan</p>
            <p>Business API</p>
            <p>Join Kuda Business</p>
          </Bus>
          <Coy>
            <h5>Company</h5>
            <p>Blog</p>
            <p>Press</p>
            <p>Join Our Team</p>
            <p>About Us</p>
          </Coy>
          <Help>
            <h5>Help</h5>
            <p>Get Help</p>
            <p>Scam Awareness</p>
            <p>FAQs</p>
            <p>Security</p>
            <p>Contact Us</p>
            <p>Self Help</p>
          </Help>
          <Trans>
            <h5>Transparency</h5>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Information Security Policy</p>
            <p>Cookie Policy</p>
            <p>Whistleblowing Policy</p>
          </Trans>
        </Container>
    )
 }
 export default Footer
 const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
    margin: 120px;
    padding-top: 100px;


    @media(max-width: 800px){
        width: 100%;
        display: flex;
       flex-wrap: wrap;
       gap: 70px;
       margin:0px;
       padding: 5px;
    /* padding-top: 100px; */


    }

 `

 const Kud = styled.div`
    img{ 
        width: 100px;
    }
 
 `
 const Per =styled.div`
    h5{
        color:#775b97;
    }
    p{
        font-size:13px;
    }

 `

 const Bus = styled.div`
    h5{
        color:#775b97;
    }
    p{
        font-size:13px;
    }
 `

 const Coy = styled.div`
    h5{
        color:#775b97;
    }
    p{
        font-size:13px;
    }

 `

 const Help = styled.div`
    h5{
        color:#775b97;
    }
    p{
        font-size:13px;
    }

 `
 const Trans = styled.div`
    h5{
        color:#775b97;
    }
    p{
        font-size:13px;
    }
 
 `
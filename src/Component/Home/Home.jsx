import Order from "../Order/Order.jsx"
import Hero from "./Hero/Hero"
import Phone from "../Phone/Phone.jsx"
import styled from "styled-components"
import img1 from "../../assets/svg/get.jpg"
import img2 from "../../assets/svg/enjoy.jpg"
import img3 from "../../assets/svg/order.jpg"
import img4 from "../../assets/svg/save.jpg"
import img5 from "../../assets/svg/pay.jpg"
import kudaimg from "../../assets/svg/kudagurl.jpeg"
import mgeImg from "../../assets/svg/mgeImg.jpg"
import Manage from "../../Component/Manage/Manage.jsx"
import spendsave from "../../assets/svg/spendsave.jpeg"
import card from "../../assets/svg/blockcard.jpeg"
import hello from "../../assets/svg/hellokuda.jpeg"
import fees from "../../assets/svg/fees.jpeg"
import Testimony from "../Testimony/Testimony.jsx"
import Assurance from "../Assurance/Assurance.jsx"
// import "../../Component/Testimony/Testimony.css"
import Badge from "../badge/Badge.jsx"
import tc from "../../assets/svg/TC.jpeg"
import World from "../../assets/svg/Worldforum.jpeg"
import Kudamfb from "../../assets/svg/Kudamfb.jpeg"
import bbc from "../../assets/svg/bbc.jpeg"
import vlar from "../../assets/svg/Vlar.jpeg"
import visa from "../../assets/svg/visa.jpeg"
import Comparison from "../Comparison/Comparison.jsx"
import pot from "../../assets/svg/pot.jpeg"
import kite from "../../assets/svg/kite.jpeg"
import box from "../../assets/svg/box.jpeg"
import target from "../../assets/svg/target.jpeg"
import sbi from "../../assets/svg/SBI.jpeg"
import fintech from "../../assets/svg/fintech.jpeg"
import express from "../../assets/svg/Express.jpeg"
import euro from "../../assets/svg/Euronomy.jpeg"
import fan from "../../assets/svg/fan.jpeg"
import Grow from "../Grow/Grow.jsx"
import KudaArica from "../KudaAfrica/KudaAfrica.jsx"



    function Home () {
   return(
   <>
        <Hero/>
        <MimiContainer>
         <Menu>
            <Card>
        <Order className = "order1" img = {img3} alt = "" text= "Order a Kuda card on the app with pickup and delivery options"/>
        <Order className = "order2" img = {img2} alt = "" text = "Enjoy cashless payment options online and offline."/>  
        <Order className = "order3" img = {img5} alt = "" text = "Pay your essential bills and buy gift cards easily."/>
        <Order className = "order4" img = {img1} alt = "" text = "Pay your essential bills and buy gift cards easily."/>
        <Order className = "order5" img = {img4} alt = "" text = "Save money automatically any time you spend."/>
        
        </Card>
        </Menu>

        </MimiContainer>




        <Cont>
          <Flex>
              <Phone className = "kudaphone"  text = "Your phone + our app + a debit card = a simpler life." p = "We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves." img = {kudaimg} alt = ""/>
              
         </Flex>

        </Cont>


          
        <Conts>
          <Flex>
              <Manage className = "kudamge"  img = {mgeImg} alt = "" text = "It’s your money, we just help you manage it." p = "Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that."/>
              
         </Flex>

        </Conts>
   
   
        <Cont>
          <Flex>
              <Phone className = "kudaphone"  text = "Save money as you spend it, seriously." p = "You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow." 
              img = {spendsave} alt = ""/>
              
         </Flex>

        </Cont>


        <Conts>
          <Flex>
              <Manage className = "kudamge"  img = {card} alt = "" text = "Turn off access, turn on safety." 
              p = "Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try."/>
              
         </Flex>

        </Conts>

        <Cont>
          <Flex>
              <Phone className = "kudaphone"  text = "We’re always happy to help you." p = "You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy."  img = {hello} alt = ""/>
              
         </Flex>

        </Cont>
        <Conts>
          <Flex>
              <Manage className = "kudamge"  img = {fees} alt = "" text = "Fees as clear as glass." 
              p = "We’re serious about free banking, and we will never, ever charge you for anything without your consent."/>
              
         </Flex>

        </Conts>

        <Assurance className = "assur" text = "Don’t just take our word for it"/>
       
       <Box>
      <Testimony className = "testi1" text= "I like the fact that kuda Microfinance Bank doesn’t only run a no fee policy and 25 free transfers. Really really nice!!" p = "Adebambo Oyekan"/>

      <Testimony className = "testi2" text= "I highly recommend this app, it does what it says: The bank of the free.I have received my kuda card." p = "Ifeanyichukwu Obaji"/>

      <Testimony className = "testi3" text= "Just joined the best Digital Bank in Nigeria <br/> I have no complaints whatsoever since i started using Kuda" p = "Mu'azu Muhammad Kudu"/>

      <Testimony className = "testi4" text= "Just joined the best Digital Bank in Nigeria <br/> I have no complaints whatsoever since i started using Kuda" p = "Tomisinv"/>

      <Testimony className = "testi5" text= "Never thought an app would stylish become my everyday way to bank and have access to physical cash.@Kudabank is sleek" p = "Babajide Duroshola"/>

      <Testimony className = "testi6" text= "This is the best banking app! I’m enjoying seamless banking plus the free transfers to others I’m gonna refer all my friends!" p = "@RealSOK_"/>

      </Box>
       

      <KudaIcons>
      <Badge className = "badge1" img = {tc} alt = ""/>
      <Badge className = "badge2" img = {World} alt = ""/>
      <Badge className = "badge3" img = {fintech} alt = ""/>
      <Badge className = "badge4" img = {bbc} alt = ""/>
      <Badge className = "badge5" img = {fan} alt = ""/>
      <Badge className = "badge6" img = {euro} alt = ""/>
      </KudaIcons>


      <Assurance className = "assur" text = "Our Partners"/>

      <KudaIcons>
      <Badge className = "badge1" img = {vlar} alt = ""/>
      <Badge className = "badge2" img = {express} alt = ""/>
      <Badge className = "badge3" img = {sbi} alt = ""/>
      <Badge className = "badge4" img = {target} alt = ""/>
      <Badge className = "badge5" img = {visa} alt = ""/>
   
      </KudaIcons>

      <Assurance className = "assur" text = "Choose the freedom you need."/>

      <Comparison/>

      <Assurance className = "assur" text = "More for you"/>
      


       <Compo>
      <Grow className = "grow1" img = {box} alt = "" text="Kuda Business" p = "Grow your business with our all-in-one business manager. Get a POS, bulk transfers, payroll and more."/>
      <Grow className = "grow1" img = {kite} alt= "" text="Transfer & Send" p = "Send money for free to any Nigerian account with 25 free transfers every month."/>
      <Grow className = "grow1" img = {pot} alt = "" text="Loans" p = "Get up to ₦150,000 in your Kuda account easily and repay in convenient instalments."/>

      </Compo> 

      <KudaArica/>

   </>



   )


}
export default Home

const MimiContainer = styled.div`
   width: 100%;
   height: 200px;
   
   


`
const Menu = styled.div`
   
   height: 400px;
   width: 100%;
   color: #482373;
   margin-top: 50px;

`

const Card = styled.div`
     display: flex;
     flex-direction: row;
     flex-wrap: wrap ;
     justify-content: center;
     gap: 20px ;
     margin-bottom: 80px;
     /* border: 2px solid red; */

     @media(max-width: 800px){
      /* border: 1px solid; */


     }
   
   
`
  
const Cont = styled.div`
   margin-top: 250px;
   /* border:1px solid; */
   height: 400px;
   width: 100%;
   /* background-color: blue; */


`


const Flex = styled.div`
display: flex;
flex-direction: row;

   


`
const Conts = styled.div`

`
const Box = styled.div`
/* border: 1px solid; */
     /* height: 300px; */
     display: flex;
     gap:20px;
     margin-top: 80px;
     width: 100%;
     /* background-color: blue; */

     p{

      
            font-size: 15px;
            margin-left: 20px;

      
     }

     @media(max-width: 800px){
      min-width: 100%;

    }  

     

`
const KudaIcons = styled.div`
    display: flex;
    gap: 90px;
   justify-content: center;
   align-items: center;
   margin-top: 50px;
   /* border: 1px solid; */


   @media(max-width: 800px){
      display: flex;
      flex-wrap: wrap;
      gap: 100px;
      padding-right: 100px;
      /* margin-top: 10px; */
      /* border: 1px solid; */

      
     

   }
    
`

    const Compo = styled.div`
    /* border:1px solid; */
    display: flex;
    gap: 50px;
    justify-content: center;

    @media(max-width: 800px){

      display: flex;
      flex-direction: column;
      margin-left: 20px;

      
    }

`
  

   



   

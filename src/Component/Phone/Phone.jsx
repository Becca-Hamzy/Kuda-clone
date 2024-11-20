import styled from "styled-components"
// import kudaimg from "../../assets/svg/kudagurl"


const Phone = ({text, p, img}) =>{
return(

    <Subs>
      <Text> <h1>{text}</h1> <p>{p}</p> </Text>
       <ImgCont><img src = {img} alt="" />  </ImgCont> 
                    
        
    </Subs>
)

}

export default Phone

const Subs = styled.div`
    display: flex;
    justify-content: center;
    gap: 180px;
    align-items: center;
    /* border: 1px solid; */
    width: 100%;
    padding-right: 350px;


    @media(max-width: 800px){
       margin-top: 400px ;
       display: flex;
       flex-direction: column;
       gap: 80px;
       align-items: center;
       width: 420px;
       padding-right: 0px;
       /* border: 1px solid; */
       /* margin-top: -100 px; */
       /* margin-bottom:400px; */





    }
    img{
        width: 400px;


        @media(max-width: 800px){
            width: 350px;
            margin-left: 40px;
                   /* border: 1px solid; */




        }

    }

`

const ImgCont = styled.div`
    width: 150px;
    

    @media(max-width: 800px){
    margin-right: 150px;
    width: 280px;
    /* border: 1px solid; */

    }

    

`
const Text = styled.div`
    /* border: 1px solid; */
    width: 350px;
    margin-left: 200px ;
    @media(max-width: 800px){
        margin-left: 80px ;

    }


   h1{
    /* border: 1px solid; */
    width: 250px;
    font-size: 30px;
    color: #40196d;
    font-weight: 800;
    line-height: 40px;

    @media(max-width: 800px){
        font-size: 25px;
        text-align: center;
        margin-left: 0px;


    }
   }
   p{
    font-size: 15px;
    font-weight: 500;


    @media(max-width: 800px){
     text-align: center;
     font-size: 12px;
     margin-right: 80px;

    }
   }
`

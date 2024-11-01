import styled from "styled-components"
import Header from "./Static/Header/Header.jsx"
import Footer from "./Static/Footer/Footer"
import Home from "../src/Component/Home/Home.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Business from "./Component/Business/Business.jsx";
import Company from "./Component/Company/Company.jsx";
// import Personal from "./Component/Personal/Personal.jsx";

const App = () =>{
    return(

      <>
        {/* <Container>
      </Container> */}
      <BrowserRouter>
      <Header/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business" element={<Business />} />
            <Route path="/company" element={<Company/>} />
          </Routes>
      <Footer/>
      </BrowserRouter>

      </>
      
    )

}
export default App

// const Container = styled.div``
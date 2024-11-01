import {Link} from 'react-router-dom'
import styled from "styled-components"
import { useState } from 'react'


const SideBar = ({toggle, setToggle}) => {
    const navi = () =>{
        setToggle(false)
    }


    return(
        <>
        <Container>
           <Link to="/" onClick={navi}>
           <nav>Personal</nav>
           </Link>
           <Link to="/business" onClick={navi} >
           <nav>Business</nav></Link>
           <Link to="/company" onClick={navi}>
           <nav>Companies</nav></Link>
        </Container>
        </>
    )
}

     export default SideBar

      const Container = styled.div`
      min-height: calc(100vh - 80px);
      background-color: rebeccapurple;
      color: #fff;

`

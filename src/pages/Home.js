import './Home.css';
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react'
import {Link } from "react-router-dom";
import study from '../images/Study.jpg';
import Computer from '../images/Computer.jpg';
const CanvasContainer = styled.div`
width: 80vw;
height: 75vh;
`;

function Items(){

  
}




export default function Home() {
  return (
     
    <div className="WelcomeContent">
      
      <h1 className="WelcomeTitle">Welcome To Our Fake Site</h1>
      <h2 className="WelcomeSubTitle">Where I try to presude someone to give me a job</h2>
   
       <h2  className="CarouselWelcomeText"> Lets Have a Look at some of our top Courses</h2>
       <CanvasContainer>
     <Carousel>
        <Carousel.Item interval={5000}>
        <Link to={'/products/1'}>
          <img
            className="d-block w-100" style={{width:"100vw",height:"75vh"}}
src={Computer}
            alt="Image One"
          />
          </Link>
          <Carousel.Caption>
          <h1 style={{fontSize:80,fontWeight:'bold', color:'black'}}>Learn To Computer</h1>
            <p style={{fontSize:20,fontWeight:'bold',color:'black'}}>Starting Every Month on the 1st</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
        <Link to={'/products/2'}>
          <img
            className="d-block w-100" style={{width:"100vw",height:"75vh"}}
src={study}
            alt="Image Two"
          />
          </Link>
          <Carousel.Caption>
            <h1 style={{fontSize:80,fontWeight:'bold', color:'black'}}>Learn To Study</h1>
            <p style={{fontSize:20,fontWeight:'bold',color:'black'}}>Starting Every Month on the 1st</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

</CanvasContainer>
    </div>
  
  )
}

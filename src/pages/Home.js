import './Home.css';
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react'
import {Link } from "react-router-dom";
import study from '../images/Study.jpg';
import Computer from '../images/Computer.jpg';
import Navbar from './navbar';
import SideMenu from './SideMenu';
const CanvasContainer = styled.div`
width: 100vw;
height: 100vh;
background-color:black;
`;

function Items(){

  
}




export default function Home() {
  return (
     <CanvasContainer>
    <div>
<Navbar/>
    </div>
    </CanvasContainer>
  );
}

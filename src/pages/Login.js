import React, { useRef, useState,Suspense } from 'react';
import { Canvas,useLoader,useFrame } from "@react-three/fiber";
import styled from "styled-components";
import { OrbitControls,Stars } from "@react-three/drei";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoginScreen } from './LoginScreen';
import day from '../images/daymap.jpg';
import clouds from '../images/clouds.jpg';
import night from '../images/daymap.jpg';
import normal from '../images/daymap.jpg';
import specular from '../images/daymap.jpg';
import * as THREE from "three";
import {Link } from "react-router-dom";
import './Login.css';
export default function Home() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [colorMap,cloudmap,nightmap,normalmap,specularmap] = useLoader(TextureLoader, [day,clouds,night,normal,specular]);
  

  function Sphere() {
    const myMesh = React.useRef();
    const cloud = React.useRef();
    const night = React.useRef();
   // const [ref, api] = useSphere(() => ({ position: [15, 32,16] }));
   
   useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime()/100
    myMesh.current.rotation.x = clock.getElapsedTime()*0.001
    cloud.current.rotation.y = clock.getElapsedTime()/100
    cloud.current.rotation.x = clock.getElapsedTime()*0.001
    night.current.rotation.y = clock.getElapsedTime()/100
    night.current.rotation.x = clock.getElapsedTime()*0.001
  })
    return (
      <>    
      <mesh ref={night} position={[-5,0,0]}>
        <sphereGeometry args={[4.002, 32, 32]}/>
        <meshPhongMaterial map={nightmap} metalness={0.9} depthWrite={true}
          transparent={true}/>
      </mesh>  
      <mesh ref={cloud} position={[-5,0,0]}>
        <sphereGeometry args={[4.005, 32, 32]}/>
        <meshPhongMaterial map={cloudmap} opacity={0.7} depthWrite={true} side={THREE.DoubleSide}
          transparent={true}/>
      </mesh>  
      <mesh position={[-5,0,0]} ref={myMesh}>
        <sphereGeometry args={[4, 32, 32]}/>
        <meshStandardMaterial map={colorMap} normalMap={normalmap} metalness={0.4} roughness={0.7} />
      </mesh>
      </>

    );
  }
  const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  `;
  return (
    <CanvasContainer>
    <div className="RightScreen">
      <div className="Heading">
        Welcome to MoodleClone
        </div>

      <div className="LowerScreen">
      <div className="lowerSubText">
        Click here below to either login or sign up
      </div>
       <div className="alignedBox">
      <p className="lowerText1"> Email:  </p>
    <TextField id="outlined-basic " style={{ borderRadius:5, backgroundColor: "#ffff", fontSize: "18px" }}  label="Outlined" variant="outlined" />
    </div>
    <div className="alignedBox">
      <p className="lowerText"> Password:  </p>
    <TextField id="outlined-basic " style={{ borderRadius:5, backgroundColor: "#ffff", fontSize: "18px" }}  label="Outlined" variant="outlined" />
    </div>
    <div className="alignedBox1">
    <Link to={'/home'}>
    <Button
    style={{
        borderRadius: 15,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px",
        margin:5
    }}
    variant="contained"
    > 
    Login
</Button> </Link><Button
    style={{
        borderRadius: 15,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px",
        margin:5,
    }}
    variant="contained"
    >
    SignUp
</Button>
</div>
      </div>
    </div>
    <Canvas>
      <ambientLight intensity={1}/>
    <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
     <pointLight color="#f6f3ea" position={[-300,-300,-150]} intensity={1.2}/>
        <Sphere />
       
    </Canvas>
    </CanvasContainer>
  )
}

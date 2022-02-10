import './Home.css';
import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@mui/material/CssBaseline';
import { useRef, useState } from 'react'
import useWindowDimensions from '../components/WindowSize';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
<meta name="viewport" content="width=device-width" initial-scale="1.00" maximum-scale="1.0" />

export default function Home() {
  const { height, width } = useWindowDimensions();
  return (
<>
<Grid container component="main" sx={{ height: '100vh',width:'100vw',position:'relative'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sx={{
            width:(width*0.96),
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position:'relative',
            display:'block',
            margin:0,
            padding:0,
          }}
        />
        <Typography className='WelcomeText' component="h1" variant="h5">
            Welcome To Moodle Clone
            </Typography>
        </Grid>
</>
    
  );
}

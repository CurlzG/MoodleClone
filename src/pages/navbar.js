import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import useWindowDimensions from '../components/WindowSize';
import './Login.css';
export default function Home() {
  const [open, setOpen] = React.useState(false);
  const { height, width } = useWindowDimensions();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
<>
     <AppBar position="static" sx={{flexGrow:1}}>
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() =>{handleDrawerOpen()}}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }} component="div">
      Photos
    </Typography>
    <Button color="inherit">Login</Button>
    
  </Toolbar>
  
</AppBar>
<SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div>
          <Box textAlign="center" p={2}>
            Components
          </Box>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary={'Container'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'Grid'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'Box'} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={'Cards'} />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
<div> 
    </div>
    </>
  )
}

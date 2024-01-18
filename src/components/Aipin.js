import React, { useState } from 'react';
import { Button, Typography, Grid, Box } from '@mui/material';
import { Headphones, PlayArrow } from '@mui/icons-material';
import '../styles/Aipi.css';
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.jpeg";
import { useNavigate } from 'react-router-dom';

export const Aipin = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    // Handle button click action
    // For example, navigate to another page
    navigate('/another-page');
  };

  return (
    <div className='main'>
      <div className="overlay"></div>

      <Grid container className="content" spacing={2}>
        <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

      
           
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px' ,height:"220px"}}>
            <img src={bg2} style={{
              height: "200%",
              marginRight: "10px"
            }} alt="Background" />
            </div>

          <Typography variant='h4' color={"white"} fontWeight={800} fontSize={50} >ai pin </Typography>
          <Typography variant="body2" fontSize={34} color={"gray"} fontWeight={400} >starting at $ 99</Typography>
          <Typography variant='body2' fontWeight={400} color={"gray"} >order today, pay over time</Typography>
        </Grid>
      </Grid>

      <Box sx={{
        justifyContent: "space-between",
        flexDirection: "row",
        display: "flex",
        position: "absolute",

        
        height: "100px",
        width: "90vw",
        marginLeft: "5%",
        marginTop: "100px"
      }}>
        <Button
          sx={{
            height: "50%",
            color: "white",
            textTransform: "none",
            fontSize: "17px",
            backgroundColor: "transparent",
            backgroundImage: "url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRk5uOROjux1Ok1bm_s6dhvgT9_1VBpxYTYj9HB_CoAS4AQwO2m')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            '&:hover': {
              backgroundColor: "transparent",
            },
            width: "100px"
          }}
          variant="contained"
          startIcon={<PlayArrow style={{
            marginLeft: "-40px"
          }} fontSize="medium" />}
          onClick={handleButtonClick}
        >


        </Button>
       
       
        <Button
          sx={{
            height: "50%",
            backgroundColor: "skyblue",
            color: "black",
            textTransform: "none",
            fontSize: "17px",
            '&:hover': {
              backgroundColor: "skyblue",
            },
            borderRadius: "10px",
          }}
          variant="contained"
          endIcon={<Headphones fontSize="large" />}
          onClick={handleButtonClick}
        >
          Order
        </Button>
      </Box>
      <Typography variant='h6' color={"white"} >watch the film</Typography> 
    </div>
  );
}

import React from "react";
import NavBar from "../Components/NavBar";
import coverimg from "./assests/cover.jpg";
import bg from "./assests/bg.jpg";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import img from "./assests/ras.jfif";
import Button from "@mui/material/Button";
function Home() {
  return (
    <div>
      <NavBar />
      <Grid container>
        <Grid item xs={12} md={6}>
            <div style={{margin:'0px 25px'}}>
          <h1 style={{ marginTop: "60px" }}>
            Exclusive Store for developers from developers
          </h1>

          <h3 style={{color:"red"}}>
            Devstore is an online eCommerce store dedicated to offering a wide
            range of equipment specially designed for programmers and
            developers. The store aims to cater to the needs of developers who
            require efficient and reliable equipment to work on their
            programming projects.
          </h3>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: "center",marginTop:'50px' }}>
            <img src={img}></img>
          </div>
          
        </Grid>
        <Grid item>
            <div style={{marginTop:'50px',textAlign:'center',width:"100vw"}}>
            <Button variant="contained" sx={{backgroundColor:'red'}}> <span style={{color:"white"}}>Shop now</span></Button>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

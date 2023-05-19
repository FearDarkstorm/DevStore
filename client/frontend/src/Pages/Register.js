import React from "react";
import { Box, TextField, Grid, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import LoginPage from "./Login";
import './Register.css'
import axios, { isCancel, AxiosError } from "axios";
import signupImg from "./assests/ecommerce.svg";
import logo from "./assests/logo.png";



function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const user = watch('username');
  const submitdata = (data,event) => {
    console.log(data);
    axios.post('http://localhost:4000/register', {
      username: data.username,
      password: data.password,
      email: data.email,
      phoneno: data.phoneno
    })
    .then(function (response) {
      alert(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  const entername = watch("name");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid
        container
        sx={{ width: "80vw", height: "600px", border: "2px solid black" }}
      >
      <Grid item xs={12} md={5} >
          
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#0f0d25",
              display: "flex",
              justifyContent: "center",
              flexDirection:'column'
            }}
          >
          <div style={{textAlign:'center'}}><h1 style={{ color: "white" }}>Hi {user}!</h1></div>  
            
          <div style={{textAlign:'center'}}> <Box sx={{display:{xs:'none',md:'block'}}}> <img
              src={signupImg}
              width={"80%"}
              style={{
          
            
              }}
            ></img></Box></div>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>

          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#182444",
            }}
          >
            
            <form onSubmit={handleSubmit(submitdata)}>
            <div style={{textAlign:'center'}}> <img
            src={logo}
            style={{
              height: "80px",
         
            }}
          /></div>
              <div
               
              >
                <div style={{textAlign:'center'  }}>
                  <TextField
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true, maxLength: 30 })}
                    sx={{
                      margin: "5px",
                      backgroundColor: "#f5f5f5", // set background color
                      borderRadius: "5px", // add border radius
                      "& .MuiOutlinedInput-notchedOutline": {
                        // customize outline
                        borderColor: "#182444",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        // customize hover state outline
                        borderColor: "#add8e6",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        // customize focused state outline
                        borderColor: "#add8e6",
                      },
                    }}
                  />

                  <TextField
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true, maxLength: 50 })}
                    sx={{
                      margin: "5px",
                      backgroundColor: "#f5f5f5", // set background color
                      borderRadius: "5px", // add border radius
                      "& .MuiOutlinedInput-notchedOutline": {
                        // customize outline
                        borderColor: "#182444",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        // customize hover state outline
                        borderColor: "#add8e6",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        // customize focused state outline
                        borderColor: "#add8e6",
                      },
                    }}
                  />
                </div>

                <div style={{ textAlign:'center' }}>
                  <TextField
                    type="text"
                    placeholder="username"
                    {...register("username", { required: true, maxLength: 30 })}
                    sx={{
                      margin: "5px",
                      backgroundColor: "#f5f5f5", // set background color
                      borderRadius: "5px", // add border radius
                      "& .MuiOutlinedInput-notchedOutline": {
                        // customize outline
                        borderColor: "#182444",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        // customize hover state outline
                        borderColor: "#add8e6",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        // customize focused state outline
                        borderColor: "#add8e6",
                      },
                    }}
                  />

                  <TextField
                    type="number"
                    placeholder="Phone No"
                    {...register("phone", { required: true, maxLength: 50 })}
                    sx={{
                      margin: "5px",
                      backgroundColor: "#f5f5f5", // set background color
                      borderRadius: "5px", // add border radius
                      "& .MuiOutlinedInput-notchedOutline": {
                        // customize outline
                        borderColor: "#182444",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        // customize hover state outline
                        borderColor: "#add8e6",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        // customize focused state outline
                        borderColor: "#add8e6",
                      },
                    }}
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "20px" }}> </div>
              </div>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                {" "}
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ width: "120px", backgroundColor: "#fdc86c" }}
                >
                  <span style={{ color: "black" }}> Register </span>
                </Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Register;

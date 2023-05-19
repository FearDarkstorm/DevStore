import React, { useState } from "react";
import { Box, TextField, Grid, Button } from "@mui/material";
import { useForm } from "react-hook-form";

import axios, { isCancel, AxiosError } from "axios";




function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const subfunc = async (data) => {
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: data.email,
        password: data.password,
      });
  
      console.log(response);
  
      if (response.status === 200) {
        // Redirect to dashboard route
        window.location.href = "/dashboard";
      }
  
      reset();
    } catch (error) {
      console.log(error);
      // Redirect to login route
      window.location.href = "/login";
    }
  };
  const enteremail = watch("Email");

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={handleSubmit(subfunc)}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "80vh",
              justifyContent: "center",
              border: "1px solid black",
              borderRadius: "10px",
              backgroundColor: "#0f0e17",
              width: "510px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                color: "#fffffe",
                marginBottom: "30px",
              }}
            >
              <h2>Welcome {enteremail}</h2>
            </div>
            <TextField
              type="text"
              placeholder="email"
              {...register("email", { required: true, maxLength: 30 })}
              sx={{ width: "500px", margin: "5px", backgroundColor: "#fffffe" }}
            />
            <TextField
              type="password"
              placeholder="password"
              {...register("password", { required: true, maxLength: 50 })}
              sx={{ width: "500px", margin: "5px", backgroundColor: "#fffffe" }}
            />
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              {" "}
              <Button
                variant="contained"
                type="submit"
                sx={{ width: "30px", backgroundColor: "#ff8906" }}
              >
                Login{" "}
              </Button>
            </div>{" "}
          </div>
        </form>
      </div>
      ;
    </>
  );
}

export default LoginPage;

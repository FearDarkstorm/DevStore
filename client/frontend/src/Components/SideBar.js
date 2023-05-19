import React, { useState } from "react";
import { Box, TextField, Grid, Button } from "@mui/material";
import { useForm } from "react-hook-form";

import axios, { isCancel, AxiosError } from "axios";

import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div style={{ display: "inline", width: "20vw",backgroundColor:'red',border:'1px solid black'}}>
      <div className="sidebar">
      <h1>Devstore</h1>

        <ul>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;

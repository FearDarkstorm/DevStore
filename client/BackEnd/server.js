const express = require("express");
const app = express();
const PORT = 4000;
const pool = require("./db");
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pgSession = require("connect-pg-simple")(session);
const flash = require("connect-flash");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const fs = require("fs");
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup session middleware
app.use(
  session({
    secret: "your_session_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
    store: new pgSession({
      pool: pool,
      tableName: "session",
    }),
  })
);

//creating a function to find a specific email
const findemail = async (email) => {
  let found = await pool.query("SELECT email FROM users WHERE email = $1 ", [
    email,
  ]);
  if (found.rows.length > 0) {
    return found.rows[0].email;
  } else {
    return undefined;
  }
};
//user registration
app.post("/register", async (req, res) => {
  try {
    const { username, password, email, phoneno } = req.body;

    const result = await pool.query(
      "SELECT COUNT(*) FROM users WHERE email = $1",
      [email]
    );
    const count = parseInt(result.rows[0].count);
    if (count > 0) {
      res.status(409).send("User already exists");
    } else {
      const saltRound = 3;
      const salt = bcrypt.genSaltSync(saltRound);
      const hash = bcrypt.hashSync(password, salt);
      let role = "customer";
      await pool.query(
        "INSERT INTO users (username, password, role, email, phoneno) VALUES ($1, $2, $3, $4, $5)",
        [username, hash, role, email, phoneno]
      );
      res.status(200).send("User registered successfully");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});
//employee regestraion
app.post("/employee", async (req, res) => {
  try {
    const { name, password, email, phone, role } = req.body;

    const result = await pool.query(
      "SELECT COUNT(*) FROM users WHERE email = $1",
      [email]
    );
    const count = parseInt(result.rows[0].count);
    if (count > 0) {
      res.status(409).send("User already exists");
    } else {
      const saltRound = 10;
      const salt = bcrypt.genSaltSync(saltRound);
      const hash = bcrypt.hashSync(password, salt);
      const userRole = role || "customer"; // use the role from the request, or default to "customer"
      await pool.query(
        "INSERT INTO users (username, password, role, email, phoneno) VALUES ($1, $2, $3, $4, $5)",
        [name, hash, userRole, email, phone]
      );
      res.status(200).send("User registered successfully");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});
const comparepass = (pass, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(pass, hash, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const findhash = async (email) => {
  try {
    const hashed = await pool.query(
      "SELECT password FROM users WHERE email = $1",
      [email]
    );
    if (hashed.rows.length > 0) {
      return hashed.rows[0].password;
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length === 0) {
      console.log("User not found");
      return res.status(400).send("email not correct");
    }

    const hash = user.rows[0].password;
    const pass = await comparepass(password, hash);

    if (!pass) {
      console.log("Incorrect password");
      return res.status(400).send("password incorrect");
    }

    console.log("Login successful");
    return res.status(200).send("login successful");
  } catch (err) {
    console.log(err);
    return res.status(400).send("something bad happend");
  }
});
// Check if user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

// Example of authenticated route
app.post("/products", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const image = req.file;

    // Insert the product data and image data into the database
    const query = `
    INSERT INTO products (name, description, price, image_url,category)
    VALUES ($1, $2, $3, $4, $5)
  `;
    const values = [
      name,
      description,
      price,
      image.filename,
      category,
    ];
    await pool.query(query, values);

    // Respond with a success message

    res.json({ message: "Product added successfully" });
  } catch (err) {
    console.log(err);
  }
});

app.get("/profile", isAuthenticated, (req, res) => {
  return res.json(req.session.user);
});

app.listen(PORT, () => {
  console.log("it is working");
});

const findproduct = async (name) => {
  const found = await pool.query(
    "SELECT * FROM products where category = $1 ",
    [name]
  );
  if (found) {
    return name;
  } else {
    console.error("this product not exist");
  }
};

app.get("/products?category={category}", async (req, res, next) => {
  const categoryid = req.query.category;

  const filterdproducts = products.filter(product);
});

app.get("/products", async (req, res) => {
  try {
    // fetch all products data from the database
    const { rows } = await pool.query("SELECT * FROM products");
    
    // const img = await pool.query("SELECT image_url FROM products")

    // send the response
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
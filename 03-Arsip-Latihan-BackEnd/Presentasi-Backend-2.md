# 1. Authentication & Authorization in Express
- **Authentication** : Memvalidasi atau memverifikasi data user 
- **Authorization** : Akses yang dimiliki user 

## A. Authentication

- **Faktor Authentication**
    1. Knowledge : informasi yang bisa ketahui  
    2. Possesion : kepemilikan user
    3. Inherence : yaitu biometric data seperti fingerprints,Face Unlock,dll
   
- **Autentikasi multifaktor (MFA)** memberikan lapisan perlindungan tambahan pada proses masuk.
  
## B. Authorization

- **Faktor Authorization**
    - Hak akses yang dimiliki oleh user 
  
## C. Encryption
- bagaimana kita mengamankan data agar tidak terlihat dan diakses oleh oranglain
- bagaimana Encryption bekerja 
  
<img src="https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2022/03/Cara-Kerja-Enkripsi-1024x467.jpg" width="600" height="400">


## D. Penggunaan JWT 
1. buka Web JWT berikut [https://jwt.io/](https://jwt.io/)

  <img src="./../00-img/Auth.jpeg" width="600" height="400">

2. bukak **visual studio code**
3. buat Folder project Baru 
4. Kemudian ketik format berikut
      - **npm init -y**
      - **npm install express body-parser jsonwebtoken** 
      - **npm install --save-dev nodemon**
5. setelah selesai kemudian bukak package.json lalu tambahkan scripts **"dev": "nodemon index.js"** 
6. untuk menjalankan code menggunakan format: **npm run dev**

7. index.js
```js
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(express.json());

const users = [
    {
        username: "udin",
        password: "password123",
    },
    {
        username: "udin2",
        password: "password123",
    },
    {
        username: "udin3",
        password: "password123",
    },
    {
        username: "udin4",
        password: "password123",
        role: "admin"
    },
];
const books = [
    {
        books: "DoraEmon",
    },
    {
        books: "Naruto",
    },
    {
        books: "Violet Evergarden",
    },
];

const accessTokenSecret = "verysecretpassword456";

app.get("/", (req, res) => {
    res.send("success");
});

app.post("/login", (req, res) => {

    const { username, password } = req.body;
    console.log("body", username, password);


    const user = users.find((item) => {
        return item.username === username && item.password === password;
    });

    if (user) {
        const accessToken = jwt.sign(
            {
                username: user.username,
                role: user.role,
            },
            accessTokenSecret
        );

        res.json({
            accessToken,
        });
    } else {
        res.send("username atau password anda salah");
    }
});


const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("auth", authHeader);

    if (authHeader) {
        jwt.verify(authHeader, accessTokenSecret, (error, user) => {
            if (error) {
                return res.sendStatus(401);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.get("/books", verifyJWT, (req, res) => {
    const { role } = req.user;
    console.log("role", role);
    if (role === "admin") {

        res.json(books);
    } else {
        res.send("anda bukan admin");
        res.sendStatus(401);
    }
});

app.listen(PORT, () => {
    console.log("running on port " + PORT);
});
   
```
8. salin salah satu username dan password, kemudian buka Tunder Client di VisCode

<img src="./../00-img/Auth1.jpeg" width="600" height="400">

9. yang terakhir letakan Token yang telah diesekusi Tunder Client di web JWT

<img src="./../00-img/Auth2.jpeg" width="600" height="400">


## F. Dokumetasi WEB
1. ["https://expressjs.com/"](Express.js)
2. ["https://nodejs.org/en/"](node.js)
3. ["https://jwt.io/"](https://jwt.io/)

## G. Tool tambahan 
- install **THUNDER CLIENT** visual studio code



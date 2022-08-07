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

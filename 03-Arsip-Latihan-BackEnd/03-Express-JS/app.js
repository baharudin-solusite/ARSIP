const express = require("express")
const app = express()

const PORT = process.env.PORT || 8000




let movies = [
    { id: 1, title: "thor" },
    { id: 2, title: "Superman" },
    { id: 3, title: "Batman" },
]

const customMiddleware = (req, res, next) => {
    console.log(req.path);
    next()
}

// Middleware
app.use(express.json())
app.use(customMiddleware)
// jalur dasar
app.get("/", (req, res) => {
    res.json("Express App")
});




// ambil semua data film (GET)
app.get("/movies", (req, res) => {
    res.json(movies)
})
// ambil data menurut id film (GET)
app.get("/movies/:id", (req, res) => {
    const id = req.params.id
    const movie = movies.find((item) => item.id == id)
    res.json(movie)
})


const khususPOST = (req, res, next) => {
    console.log("khusus POST")
    next()
}

// update data movie (POST)
app.post("/movies", khususPOST, (req, res) => {
    const movie = req.body
    movies.push(movie)
    // respon data berhasil ditambahkan
    res.json("Berhasil menambahkan Movie")

})
// PUT - update by id
app.put('/movies/:id', (req, res) => {
    const id = req.params.id
    res.json('Berhasil Mengapdate Movie')
})

// DELETE - delate by id

app.delete('/movies/:id', (req, res) => {
    const id = req.params.id
    res.json('Berhasil Menghapus ID Film')
})


app.listen(PORT, () => {
    console.log("server running on port" + PORT);
});
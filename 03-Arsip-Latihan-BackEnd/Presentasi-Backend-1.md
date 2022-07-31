# BackEnd

## **A.Node.js**
note Js adalah suatu tempat untuk mengesekusi sebuah code JavaScript di luar sebuah browser yang dibuat Ryan Dahl pada tahun 2009 yang masih digunakan sampai sekarang 

### **1. Apa itu node js?**
Node.js adalah runtime environment untuk JavaScript yang bersifat open-source dan cross-platform. Dengan Node.js kita dapat menjalankan kode JavaScript di mana pun, tidak hanya terbatas pada lingkungan browser.

Node.js menjalankan V8 JavaScript engine (yang juga merupakan inti dari Google Chrome) di luar browser. Ini memungkinkan Node.js memiliki performa yang tinggi.
### **2. Note.js Architecture**
JavaScript menggunakan konsep **Single Theread** memiliki satu tumpukan panggilan yang dapat mengoperasikan program secara bersama

<img src="https://www.appinessworld.com/images/server-side-development-with-nodejs-inner-3.png" width="600" height="400">

1. Aplikasi
2. V8 (Esekusi JS)
3. Event Queue (Menampung data)
4. Event Loop (memeriksa data)
5. Blocking Operastion (Program Berjalan/Sedang dijalankan)
6. Worker Threads(menjalankan perintah)
7. Execute Callback (mengebalikan Perintah)

### **3. Even Loop**

Walaupun Node.js tidak mendukung multi-threading kita dapat melihat JavaScript seperti menggunakan multi thread, yang dimana event queue bertugas menampung data lalu event loop bertugas memeriksan data atau antrian secara terus menerus sampai perintah selesai.

### **4. Server-side sciripting**

Pengolahan data yang dilakukan dalam sebuah server, sebagai contoh saat kita menggunakan JavaScript, biasanya menggunakan web server berupa Google Chrome, tetapi dalam pengoperasiaan pada node Js kita akan menjalankan di sebuah terminal dengan menggunakan perintah/format **Node** 

### **5. Penggunaan JavaScript Pada Node Js**
- Arrow Expression

```js

// Arrow Expression
console.log("Arrow Expresion")
// no arrow function
function countLength(num1, num2) {
    return num1 + num2
}
console.log(countLength(10, 20)) //30

// arrow Function
const countLength2 = (num1, num2) => {
    return num1 + num2;
}
console.log(countLength2(10, 30)) //40

// hasil yang muncul pada terminal saat menulisakan format; node index js adalah
// 30
// 40

```
- Asynchronous

```js
// Asynchronous
console.log("Asychronous")
// seTimeout bertugas mengatur nilai mana yang terahir muncul dengan menggunakan jeda Waktu
console.log("cuci piring");
setTimeout(() => {
    console.log("cuci Baju")
}, 1000)
console.log("masak");
```
- JSON

```JSON
{
    "Peserta": [
        {
            "username": "Arrie",
            "Asal": "Bandung"
        },
        {
            "username": "Budi",
            "Asal": "Bandung"
        },
        {
            "username": "Udin",
            "Asal": "Bandung"
        },
        {
            "username": "Julio",
            "Asal": "Bandung"
        }
    ]
}
```
### **6. Module Node JS**

1. Module
2. Process
3. OS
4. Util
5. Events
6. Errors
7. FS
8. Timers

## **B.Web Server & RESTful API**

### Apa itu web server
- Web server yaitu sebuah perangkat lunak yang berfungsi untuk memberikan layanan berupa data, dan berfungsi menerima permintaan HTTP atau HTTPS dari klien yang menggunakan browser (chrome, firefox, dll)

### ***3 komponen penting Web Server***


<img src="https://www.pelajaran.co.id/wp-content/uploads/2017/01/pengertian-software-hardware-brainware.jpg"  width="600" height="400">

- Hardwere
adalah sebuah server yang bertugas menyimpan perangkat lunak misalnya, dokumen HTML, gambar, lembar gaya CSS, dan file JavaScript
- Software
server web mencakup beberapa bagian yang mengontrol cara pengguna web mengakses file yang dihosting

### **Static Web Server VS Dynamic Web Server**
- **Statis** server mengirimkan file yang dihosting apa adanya ke browser Anda.
- **Dynamic** terdiri dari server web statis ditambah perangkat lunak tambahan, paling sering server aplikasi dan database. 

### **Server Side Programming**

- sebuah pesan permintaan klien, untuk memprosesnya pesan data, dan akan menghasilkan sebuah respons berupa HTTP.

### **Static Sites and Dynamic Site**

- **Static Sites** adalah situs yang mengembalikan konten hard-coded yang sama dari server setiap kali sumber daya tertentu diminta
- **Dynamic Site** dapat mengembalikan data yang berbeda untuk URL berdasarkan informasi yang diberikan oleh pengguna atau preferensi yang disimpan dan dapat melakukan operasi lain sebagai bagian dari pengembalian respons (misalnya, mengirim pemberitahuan).


## **C.Express**
- Express JS adalah salah satu framework yang berasal dari bahasa pemrograman JavaScript yang dirancang secara fleksibel dan minimalis, untuk pengembangan aplikasi back-end.

<br>
<img src="https://www.goldenfast.net/blog/wp-content/uploads/2020/11/cara-kerja-web-server.jpg"  width="600" height="400">

### **Penggunaan Express API**
1. Buka Terminal 
   - ketik format **npm init -y** untuk membuat inisial pada projek yang akan menampilkan Package-JSON
   - instal express dengan format **npm i express**
   - instal nodemon dengan format **npm i -D nodemon**
   - tambahkan sebuah Script pada PackJSON
  ```json
      "start": "node app.js",
      "dev": "nodemon app.js",
  ```

```JS
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000


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

// update data movie (POST)
app.post("/movies", (req, res) => {
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
```
## **D.MySQL**

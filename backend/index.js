const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

// const multer = require('multer');
// const path = require('path');


const app = express();

var corsOption = {
    origin: "https://**"
};

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./models");
db.sequelize.sync({force: true})
.then(() => {
    console.log("synced db.");
})
.catch((err) => {
    console.log("failed to sync db: "+ err.message);
});

app.get("/", (req, res) =>{
    res.json({message: "welcom to bezkoder application."});
});


// Configurer le stockage des fichiers
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'images');
//   },
//   filename: function (req, file, cb) {
//     cb(null,  Date.now() + path.extname(file.originalname));
//   }
// });

// // Initialiser `multer`
// const upload = multer({ storage: storage });

// // Middleware pour servir les fichiers statiques
// app.use('/uploads', express.static('uploads'));

// // Route pour gérer le téléchargement de fichiers
// app.post('/upload', upload.single('image'), (req, res) => {
//   try {
//     const imageUrl = `/uploads/${req.file.images}`;
//     res.send(`
//       <h1>Image téléchargée avec succès</h1>
//       <img src="${imageUrl}" alt="Uploaded Image"/>
//       <p><a href="/">Télécharger une autre image</a></p>
//     `);
//   } catch (error) {
//     res.status(400).send({ error: 'Erreur lors du téléchargement de l\'image' });
//   }
// });


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });


require("./routes/vehicules.routes")(app);
require("./routes/utilisateur.routes")(app);
require("./routes/location.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/reservation.routes")(app);
require("./routes/administrateur.routes")(app);
require("./routes/villes.routes")(app);






const PORT = 3010;
app.listen(PORT,() =>{
    console.log(`le serveur a demare`);
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Importă routerele pentru entitățile respective
const jucatorRouter = require('./routes/jucator');
const echipaRouter = require('./routes/echipa');
const clasamentRouter = require('./routes/clasament');
const performanteRouter = require('./routes/performante');
const galerieMediaRouter = require('./routes/galerie_media');
const antrenorRouter = require('./routes/antrenor');
const meciRouter = require('./routes/meci');
const biletRouter = require('./routes/bilet');
const stireRouter = require('./routes/stire');
const rolRouter = require('./routes/rol');
const personalRouter = require('./routes/personal');
const logInRouter = require('./routes/log_in');

const app = express();
const port = process.env.PORT || 3000;

// Conectează-te la baza de date MongoDB
mongoose.connect('mongodb://localhost:27017/CSU_Suceava_DataBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware pentru a parsa corpul cererii în format JSON
app.use(bodyParser.json());

// Folosește routerele pentru entitățile respective
app.use('/jucatori', jucatorRouter);
app.use('/echipe', echipaRouter); 
app.use('/clasament', clasamentRouter);
app.use('/performante', performanteRouter);
app.use('/galerie_media', galerieMediaRouter);
app.use('/antrenori', antrenorRouter);
app.use('/meciuri', meciRouter);
app.use('/bilete', biletRouter);
app.use('/stiri', stireRouter);
app.use('/roluri', rolRouter);
app.use('/personal', personalRouter);
app.use('/log_in', logInRouter);

// Alte rute pentru alte entități sau alte acțiuni

// Rulare server
app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});

const path = require('path');

// ...

// Definește ruta pentru fișierul home.html
// Adăugați aceste linii după definirea app cu express()
// Adaugă această linie înainte de definirea rutelor
app.use(express.static(__dirname));

// Restul codului rămâne neschimbat


// Definește ruta pentru fișierul home.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});


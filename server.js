const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/User'); 

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

// Autentificare utilizator
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificăm în baza de date dacă există un utilizator cu adresa de email și parola furnizate
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ message: 'Autentificare eșuată. Verificați adresa de email și parola.' });
    }

    // Verificăm rolul utilizatorului
    if (user.role === 'admin') {
      return res.status(200).json({ message: 'Autentificare cu succes! Ești logat ca administrator.' , username:user.name});
    } else {
      return res.status(200).json({ message: 'Autentificare cu succes!', username:user.name });
    }
   
  } catch (error) {
    console.error('Eroare la autentificare:', error);
    return res.status(500).json({ message: 'Eroare la autentificare', error: error.message });
  }
});

// Înregistrare utilizator nou
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log('Received data:', name, email, password);

  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'Utilizator înregistrat cu succes!' });
  } catch (error) {
    console.error('Eroare la înregistrare:', error);
    res.status(500).json({ message: 'Eroare la înregistrare', error: error.message });
  }
});

// Restul codului rămâne neschimbat

// Rulare server
app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});

const path = require('path');

// Definește ruta pentru fișierul home.html
app.use(express.static(__dirname));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/CSU-pages/html/home.html'));
});

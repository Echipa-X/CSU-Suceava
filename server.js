const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const User = require('./models/User'); 
const multer = require('multer'); // Pentru gestionarea încărcării de fișiere

const Stire = require('./models/stire');
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
//app.use('/stiri', stireRouter);
app.use('/roluri', rolRouter);
app.use('/personal', personalRouter);
app.use('/log_in', logInRouter);



// Alte configurații și middleware-uri
// Configurare pentru încărcarea fișierelor folosind multer

////E BUUUUUN
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); // Directorul în care să se salveze fișierele
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Numele unic al fișierului
  }
});
const upload = multer({ storage: storage });

app.post('/adauga-stire', upload.single('image'), async (req, res) => {
  try {
    // Extrage datele trimise din corpul cererii
    const { title } = req.body;
    
    // Crează o nouă instanță a modelului Stire cu datele primite
    const newStire = new Stire({
      title: title,
      image: req.file.filename // Numele fișierului încărcat
    });

    // Salvează știrea în baza de date
    const savedStire = await newStire.save();

    res.status(201).json(savedStire); // Trimite răspunsul către client cu știrea adăugată
  } catch (err) {
    res.status(400).json({ message: err.message }); // Tratează orice eroare și trimite un răspuns de eroare către client
  }
});
app.get('/stiri', async (req, res) => {
  try {
    // Găsește toate știrile din baza de date
    const stiri = await Stire.find();

    // Returnează știrile găsite sub formă de JSON
    res.json(stiri);
  } catch (error) {
    console.error('Eroare la obținerea știrilor din baza de date:', error);
    res.status(500).json({ error: 'Eroare la obținerea știrilor din baza de date' });
  }
});
// const publishedNews = [];

// // Rută pentru publicarea unei știri în secțiunea de noutăți
// app.post('/publica-stire', async (req, res) => {
//   try {
//     const { title } = req.body;
//     // Adaugă știrea în array-ul de știri publicate
//     publishedNews.push({ title: title, timestamp: new Date() });

//     res.status(200).json({ message: 'News published successfully' });
//   } catch (error) {
//     console.error('Error publishing news:', error);
//     res.status(500).json({ error: 'Error publishing news' });
//   }
// });

// // Rută pentru obținerea știrilor publicate în secțiunea de noutăți
// app.get('/noutati', async (req, res) => {
//   try {
//     // Returnează array-ul de știri publicate
//     res.status(200).json(publishedNews);
//   } catch (error) {
//     console.error('Error fetching news:', error);
//     res.status(500).json({ error: 'Error fetching news' });
//   }
// });
// app.post('/adauga-stire', upload.single('image'), async (req, res) => {
//   try {
//       // Extrage datele trimise din corpul cererii
//       const { title } = req.body;
      
//       // Crează o nouă instanță a modelului Stire cu datele primite
//       const newStire = new Stire({
//           title: title,
//           image: req.file.filename // Numele fișierului încărcat
//       });

//       // Salvează știrea în baza de date
//       const savedStire = await newStire.save();

//       res.status(201).json(savedStire); // Trimite răspunsul către client cu știrea adăugată
//   } catch (err) {
//       res.status(400).json({ message: err.message }); // Tratează orice eroare și trimite un răspuns de eroare către client
//   }
// });
// app.post('/adauga-stire', async (req, res) => {
//   try {
//     const { titlu, imagineUrl } = req.body;
//     const stireNoua = new Stire({ titlu, imagineUrl });
//     await stireNoua.save();
//     res.status(201).json({ message: 'Știrea a fost adăugată cu succes!' });
//   } catch (error) {
//     console.error('Eroare la adăugarea știrii:', error);
//     res.status(500).json({ error: 'Eroare internă a serverului' });
//   }
// });

// // Definește ruta pentru a obține știrile din baza de date
// app.get('/stiri', async (req, res) => {
//   try {
//       // Obține știrile din baza de date și trimite-le ca răspuns
//       const stiri = await Stire.find(); // Presupunând că ai un model numit Stire
//       res.json(stiri);
//   } catch (error) {
//       console.error('Eroare la încărcarea știrilor:', error);
//       res.status(500).json({ error: 'A apărut o eroare la încărcarea știrilor.' });
//   }
// });
// // Definește ruta pentru a obține toate știrile
// app.get('/api/stiri', async (req, res) => {
//   try {
//       // Găsește toate știrile din baza de date
//       const stiri = await Stire.find();

//       // Returnează știrile găsite sub formă de JSON
//       res.json(stiri);
//   } catch (error) {
//       console.error('Eroare la obținerea știrilor din baza de date:', error);
//       res.status(500).json({ error: 'Eroare la obținerea știrilor din baza de date' });
//   }
// });

// // Configurare pentru încărcarea fișierelor folosind multer
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//       cb(null, 'public/uploads'); // Directorul în care să se salveze fișierele
//   },
//   filename: function (req, file, cb) {
//       cb(null, file.originalname); // Numele original al fișierului
//   }
// });
// const upload = multer({ storage: storage });

// // Alte configurații și middleware-uri

// // Rută pentru adăugarea unei știri noi
// app.post('/adauga-stire', upload.single('image'), async (req, res) => {
//   try {
//       // Extrage datele trimise din corpul cererii
//       const { title } = req.body;
      
//       // Crează o nouă instanță a modelului Stire cu datele primite
//       const newStire = new Stire({
//           title: title,
//           image: req.file.filename // Numele fișierului încărcat
//       });

//       // Salvează știrea în baza de date
//       const savedStire = await newStire.save();

//       res.status(201).json(savedStire); // Trimite răspunsul către client cu știrea adăugată
//   } catch (err) {
//       res.status(400).json({ message: err.message }); // Tratează orice eroare și trimite un răspuns de eroare către client
//   }
// });
// app.post('/api/data', async (req, res, next) => {
//   try {
//     const { titlu } = req.body;

//     // Insert the data into MongoDB
//     const newStire = new Stire({ titlu});
//     const result = await newStire.insertOne({ titlu });

//     res.status(201).json({ id: result.insertedId });
//   } catch (error) {
//     next(error);
//   }
// });
// const upload = multer();

// app.post('/adauga-stire', upload.single('imagine'), async (req, res) => {
//   try {
//     const { titlu } = req.body;
//     const imagineBuffer = req.file.buffer;

//     const newStire = new Stire({ titlu, imagine: imagineBuffer });
//     const savedStire = await newStire.save();

//     res.status(201).json({ message: 'Știrea a fost adăugată cu succes!', stire: savedStire });
//   } catch (error) {
//     console.error('Eroare la adăugarea știrii:', error);
//     res.status(500).json({ error: 'Eroare internă a serverului' });
//   }
// });
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

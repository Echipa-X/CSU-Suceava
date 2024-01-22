const mongoose = require('mongoose');

const faker = require('faker');




// Import your Mongoose models
const Jucator = require('./models/jucator');
const Echipa = require('./models/echipa');
const Clasament = require('./models/clasament');
const Performanta = require('./models/performante');
const GalerieMedia = require('./models/galerie_media');
const Antrenor = require('./models/antrenor');
const Meci = require('./models/meci');
const Bilet = require('./models/bilet');
const Stire = require('./models/stire');
const Rol = require('./models/rol');
const Personal = require('./models/personal');
const LogIn = require('./models/log_in');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/CSU_Suceava_DataBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to generate dummy data for each collection
const generateJucatorData = () => {
  return {
    ID_Echipa: new mongoose.Types.ObjectId(),
    Nume: faker.name.lastName(),
    Prenume: faker.name.firstName(),
    Data_nasterii: faker.date.past(),
    Inaltime: faker.datatype.number(200),
    Nationalitate: faker.address.country(),
    ID_Media: new mongoose.Types.ObjectId() // Assuming you have a media collection
  };
};

const generateEchipaData = () => {
  return {
    Nume_Echipa: faker.company.companyName(),
    An_Infiintare: faker.date.past(),
    Tip_Echipa: 'Fotbal' // Modify as needed
  };
};

const generateClasamentData = () => {
  return {
    ID_Echipa: new mongoose.Types.ObjectId(),
    Meciuri_Jucate: faker.datatype.number(20),
    Victorii: faker.datatype.number(10),
    Infrangeri: faker.datatype.number(5),
    Egaluri: faker.datatype.number(5),
    Punctaj_Total: faker.datatype.number(50),
    Pozitie_Clasament: faker.datatype.number(10)
  };
};

const generatePerformantaData = () => {
  return {
    ID_Jucator: new mongoose.Types.ObjectId(),
    Locul: faker.datatype.number(10),
    Descrierea: faker.lorem.sentence(),
    Perioada: faker.date.past()
  };
};

const generateGalerieMediaData = () => {
  return {
    Tip_Media: 'Imagine',
    Descriere: faker.lorem.sentence(),
    URL: faker.image.imageUrl()
  };
};

const generateAntrenorData = () => {
  return {
    ID_Personal: new mongoose.Types.ObjectId(),
    Data_Start: faker.date.past(),
    Data_Final: faker.date.future(),
    ID_Echipa: new mongoose.Types.ObjectId()
  };
};

const generateMeciData = () => {
  return {
    ID_Echipa: new mongoose.Types.ObjectId(),
    Nume_Echipa_Oponenta: faker.company.companyName(),
    Scor_Gazda: faker.datatype.number(5),
    Scor_Echipa_Oponenta: faker.datatype.number(5),
    Ora_Start: faker.date.future(),
    Ora_Final: faker.date.future()
  };
};

const generateBiletData = () => {
  return {
    Tip: 'Normal',
    Pret: faker.datatype.number(100),
    ID_Meci: new mongoose.Types.ObjectId()
  };
};

const generateStireData = () => {
  return {
    Titlu_Stire: faker.lorem.words(),
    Continut_Stire: faker.lorem.paragraph(),
    Data_Publicarii: faker.date.past(),
    Autor: faker.name.findName()
  };
};

const generateRolData = () => {
  return {
    Nume_Rol: 'Jucator',
    Data_Start: faker.date.past(),
    Data_Final: faker.date.future(),
    ID_Jucator: new mongoose.Types.ObjectId()
  };
};

const generatePersonalData = () => {
  return {
    Nume: faker.name.lastName(),
    Prenume: faker.name.firstName(),
    Data_Angajarii: faker.date.past(),
    Rol: 'Manager', // Modify as needed
    ID_Manager: new mongoose.Types.ObjectId()
  };
};

const generateLogInData = () => {
  return {
    Nume: faker.internet.userName(),
    Prenume: faker.name.firstName(),
    Adresa_Email: faker.internet.email(),
    Parola: faker.internet.password(),
    Rol: 'Utilizator' // Modify as needed
  };
};

// Function to seed the database with dummy data
const seedDatabase = async () => {
  try {
    await Jucator.insertMany(Array.from({ length: 10 }, generateJucatorData));
    await Echipa.insertMany(Array.from({ length: 5 }, generateEchipaData));
    await Clasament.insertMany(Array.from({ length: 5 }, generateClasamentData));
    await Performanta.insertMany(Array.from({ length: 10 }, generatePerformantaData));
    await GalerieMedia.insertMany(Array.from({ length: 10 }, generateGalerieMediaData));
    await Antrenor.insertMany(Array.from({ length: 5 }, generateAntrenorData));
    await Meci.insertMany(Array.from({ length: 10 }, generateMeciData));
    await Bilet.insertMany(Array.from({ length: 10 }, generateBiletData));
    await Stire.insertMany(Array.from({ length: 5 }, generateStireData));
    await Rol.insertMany(Array.from({ length: 5 }, generateRolData));
    await Personal.insertMany(Array.from({ length: 5 }, generatePersonalData));
    await LogIn.insertMany(Array.from({ length: 5 }, generateLogInData));

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seedDatabase function
seedDatabase();

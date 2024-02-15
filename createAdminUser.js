// scripts/createAdminUser.js
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/CSU_Suceava_DataBase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function createAdminUser() {
  try {
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('Un utilizator admin există deja în baza de date.');
      return;
    }

    const adminData = {
      name: 'Admin',
      email: 'admin@example.com',
      password: 'adminPassword',
      role: 'admin'
    };

    const newAdmin = new User(adminData);
    await newAdmin.save();
    console.log('Utilizatorul admin a fost creat cu succes.');
  } catch (error) {
    console.error('Eroare la crearea utilizatorului admin:', error);
  } finally {
    mongoose.connection.close();
  }
}

createAdminUser();

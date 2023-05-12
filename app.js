require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.use(express());const db_host = process.env.DATABASE_HOST || 'localhost';
app.use(express());const db_port = process.env.DATABASE_PORT || 3036;
app.use(express());const db_username = process.env.DATABASE_USERNAME || 'root';
app.use(express());const db_password = process.env.DATABASE_PASSWORD || '12345678';
app.use(express.urlencoded({ extended: true}));

app.get('/biodata', (req, res) => {
    const name = req.query.name; 
    const tempatLahir = req.query.tempatLahir;
    const tanggalLahir = req.query.tanggalLahir;
    const alamat = req.query.alamat;

    res.send ({
      'name': name,
      'Tempat-lahir': tempatLahir,
      'Tanggal-lahir': tanggalLahir,
      'alamat': alamat,
    });
  });

app.post('/biodata', (req, res) => {
    const name = req.body.name; 
    const tempatLahir = req.body.tempatLahir;
    const tanggalLahir = req.body.tanggalLahir;
    const alamat = req.body.alamat;
   
    res.send ({
      'name': name,
      'Tempat-lahir': tempatLahir,
      'Tanggal-lahir': tanggalLahir,
      'alamat': alamat,
    });
  });


app.listen(port);
  console.log('Server berjalan pada port at http://localhost:'+ port);

  console.log(`PORT: ${port}`);
  console.log(`DB_HOST: ${db_host}`);
  console.log(`DB_PORT: ${db_port}`);
  console.log(`DB_USERNAME: ${db_username}`);
  console.log(`DB_PASSWORD: ${db_password}`);



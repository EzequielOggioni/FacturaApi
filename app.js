const userContr = require('./controller');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

express.json();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('llegaste al servidor');
});

app.get('/healt', (req, res) => {
  res.send('llegaste al servidor');
});

app.post('/usuario/', (req, res) => {
    
     var data = req.body;
    console.log(data);
    res.send(data.usuario.username);

});

app.get('/usuario/', (req, res) => {
    
   userContr.getAlumnos(null, res);
   
});

app.get('/facturas/', (req, res) => {
    res.send('[{"fecha":"2026-04-01","tipo":"1","numero":1,"iva":5250,"total":30250,"neto":25000,"receptor":"Cliente estafador","items":[{"cantidad":1,"descripcion":"producto 1","precioUnitario":25000}]},{"fecha":"2026-04-02","tipo":2,"numero":2,"iva":10781.609999999999,"total":62122.61,"neto":51341,"receptor":"segunda estafa","items":[{"cantidad":3,"descripcion":"producto 1","precioUnitario":4470},{"cantidad":2,"descripcion":"producto 2","precioUnitario":1254}]},{"fecha":"2026-04-13T23:52:25.743Z","tipo":"2","numero":3,"iva":12600,"total":72600,"neto":60000,"receptor":"dsad","items":[{"cantidad":1,"descripcion":"producto 1","precioUnitario":10000},{"cantidad":2,"descripcion":"producto 2","precioUnitario":12000}]},{"fecha":"2026-04-01","tipo":2,"numero":4,"iva":5250,"total":30250,"neto":25000,"receptor":"Cliente estafador","items":[{"cantidad":1,"descripcion":"producto 1","precioUnitario":25000}]},{"fecha":"2026-04-02","tipo":2,"numero":5,"iva":10781.609999999999,"total":62122.61,"neto":51341,"receptor":"segunda estafa","items":[{"cantidad":3,"descripcion":"producto 1","precioUnitario":4470},{"cantidad":2,"descripcion":"producto 2","precioUnitario":1254}]},{"fecha":"2026-04-13T23:52:25.743Z","tipo":"2","numero":6,"iva":12600,"total":72600,"neto":60000,"receptor":"dsad","items":[{"cantidad":1,"descripcion":"producto 1","precioUnitario":10000},{"cantidad":2,"descripcion":"producto 2","precioUnitario":12000}]},{"fecha":"2026-04-14T00:46:03.985Z","tipo":"1","numero":7,"iva":5250,"total":30250,"neto":25000,"receptor":"Consumidor final","items":[{"cantidad":1,"descripcion":"producto 1","precioUnitario":58}]},{"fecha":"","tipo":"0","numero":8,"iva":149100,"total":859100,"neto":710000,"receptor":"Beltran","items":[{"cantidad":1,"descripcion":"Tele","precioUnitario":510000},{"cantidad":1,"descripcion":"Proyector","precioUnitario":200000}]},{"fecha":"2026-04-01","tipo":"1","numero":1,"iva":5250,"total":30250,"neto":25000,"receptor":"Cliente estafador","items":[{"cantidad":1,"descripcion":"producto 1","precioUnitario":25000}]}]');

});

app.listen(port, () => {
  console.log(`el servidor está corriendo en http://localhost:${port}`);
});
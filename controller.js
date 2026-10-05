const db = require('./database');

exports.getAlumnos  = (req, res) => {
    db.query('SELECT * FROM alumnos', (err, results) => {
        if (err) {
            console.error('Error al obtener alumnos:', err);
            res.status(500).send('Error al obtener alumnos');
        } else {
            res.json(results);
        }
    });
};
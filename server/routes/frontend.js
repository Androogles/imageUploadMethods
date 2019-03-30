// indlæser moduler
const path = require('path'); /* fortolker stier til alle styresytemer */
const uuidv4 = require('uuid/v4'); // genrere unikke nøgler
const fs = require('fs'); // fs, (fileSystem) til at slette billeder  
// gm, (graphicsMagick) til billede skalering, og upload.
// imageMagick skal downloades uden for visual studio/node 
const gm = require('gm').subClass({
    imageMagick: true
});

// indlæser services, fra module.exports
const product_service = require(path.join(__dirname, '..', 'services', 'products.js'));


module.exports = (app) => {
    // ========================   Index (Henter Siden)   ========================
    app.get('/', (req, res) => {
        res.render('pages/index', {
            "page": "index",
            "title": "Forside"
        });
    });

    // ========================   Produkter (Henter Siden)   ========================
    app.get('/produkter', (req, res) => {
        res.render('pages/products', {
            "page": "products",
            "title": "Produkter"
        });
    });
}
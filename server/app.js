// indlæs express
const express = require('express');
const app = express();

// indlæs alle app modules
require('./modules/fileCollector.js')(app);

// indlæs alle routes
require('./routes/fileCollector.js')(app);

// start serveren på en port
const port = 3000;
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('App is listening on http://localhost:' + port);
});
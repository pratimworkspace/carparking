const express = require('express');
const app = express();
const path = require('path'); 


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{    
    res.render('index');
});

app.post('/carparkinglocation', (req, res)=>{
    res.render('carparkingslot');
});

app.listen(3000);
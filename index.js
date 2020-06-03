const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

//settings
app.set('views',path.join(__dirname+'/views'))
app.set('view engine','ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extend: false}));
app.use(session({
	secret: 'mysecretkey',
	resave: false,
	saveUninitialized: false
}));
app.use(flash());

//global variable
app.use((req,res,next) => {
	app.locals.message = req.flash('success')
	next();
})

//routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Servidor en puerto',3000);
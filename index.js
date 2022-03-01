const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

let to;
let subject;
let body;

app.post('/sendmail', (req, res) => {
	to = req.body.to;
	subject = req.body.subject;
	body = req.body.subject;
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'ashveertest@gmail.com',
			pass: process.env.EMAIL_PASS,
		},
	});

	let mailOptions = {
		from: 'ashveertest@gmail.com',
		to: to,
		subject: subject,
		text: body,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Email sent: ' + info.response);
		}
	});
});

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Server is running');
});

app.listen(PORT, () => {
	console.log(`App started on port ${PORT}`);
});

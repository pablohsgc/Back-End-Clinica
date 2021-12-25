// Importing module
import express from 'express';

const app = express();
const PORT = 3000 || process.env.PORT;

// Handling GET / Request
app.get('/', (req, res) => {
	res.send('Welcome to typescript backend!');
})

// Server setup
app.listen(PORT,() => {
	console.log('Teste a aplicação no seu navegador em: \nhttp://localhost:'+PORT);
})

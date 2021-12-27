// Importing module
import express from 'express';
import pacientesRoute from './Routes/pacientesRoute';
import funcionariosRoute from './Routes/funcionariosRoute';
import medicosRoute from './Routes/medicosRoute';

const app = express();
const PORT = 3000 || process.env.PORT;

// Handling GET / Request
app.get('/', (req, res) => {
	res.send('Backend da aplicação rodando na porta '+PORT);
})

app.use(pacientesRoute);
app.use(funcionariosRoute);
app.use(medicosRoute);

// Server setup
app.listen(PORT,() => {
	console.log('Teste a aplicação no seu navegador em: \nhttp://localhost:'+PORT);
})

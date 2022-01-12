import express from 'express';
import pacientesRoute from './Routes/pacientesRoute';
import funcionariosRoute from './Routes/funcionariosRoute';
import medicosRoute from './Routes/medicosRoute';
import enderecosRoute from './Routes/enderecosRoute';
import agendamentosRoute from './Routes/agendamentosRoute';

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send('Backend da aplicação rodando na porta ' + PORT);
})

app.use(pacientesRoute);
app.use(funcionariosRoute);
app.use(medicosRoute);
app.use(enderecosRoute);
app.use(agendamentosRoute);

// Server setup
app.listen(PORT, () => {
	console.log('Teste a aplicação no seu navegador em: \nhttp://localhost:' + PORT);
})

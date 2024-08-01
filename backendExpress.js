import express, { json } from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(json());

app.post('/registration', (req, res) => {
  try {
    const { nome, email, password } = req.body;

    if (!nome || !email || !password) {
      return res.status(400).json({ error: 'Os campos nome, email e password são obrigatórios' });
    }

    return res.status(200).json({ message: 'Dados recebidos com sucesso!', dados: req.body });
  } catch (e) {
    return res.status(500).json({ message: 'Ocorreu erro ao tentar registrar!', errors: e });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
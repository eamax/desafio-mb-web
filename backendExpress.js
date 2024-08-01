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
    const { nome, idade } = req.body;

    // Validação simples: verifica se os campos nome e idade estão presentes
    if (!nome || !idade) {
      return res.status(400).json({ error: 'Os campos nome e idade são obrigatórios' });
    }

    // Se a validação passar, retorna uma resposta de sucesso mockada
    return res.status(200).json({ message: 'Dados recebidos com sucesso!', dados: req.body });
  } catch (e) {
    return res.status(500).json({ message: 'Ocorreu erro ao tentar registrar!', errors: e });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// import routes from './app/routes/routes';
import paasRouter from './app/routes/paas';
import saasRouter from './app/routes/saas';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(routes);
app.use('/paas', paasRouter);
app.use('/saas', saasRouter);

app.get('/', (req, res) => {
    res.json({ status: 'API is running on /api' });
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});

export default app;
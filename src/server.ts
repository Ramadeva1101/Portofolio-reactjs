import express from 'express';
import cors from 'cors';
import emailRouter from './api/send-email';

const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:5174'
}));
app.use(express.json());
app.use('/api', emailRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
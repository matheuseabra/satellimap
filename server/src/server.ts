import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
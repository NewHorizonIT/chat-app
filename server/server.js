import mongoose from 'mongoose';
import app from './src/app.js';

const server = app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

async function shutdown() {
  console.log('Closing server...');

  server.close(() => console.log('HTTP server closed'));

  await mongoose.disconnect();
  console.log('MongoDB disconnected');

  process.exit(0);
}

process.on('SIGINT', shutdown);

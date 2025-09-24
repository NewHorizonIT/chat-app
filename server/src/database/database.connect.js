import mongoose from 'mongoose';
import config from '../config/index.js';

class Database {
  static instance = null;
  connected = false;

  static async getInstance() {
    if (!Database.instance) {
      const newdb = new Database();
      Database.instance = await newdb.connect();
    }
    return Database.instance;
  }

  async connect() {
    if (this.connected) {
      return mongoose;
    }

    const uri = `mongodb://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}?authSource=admin`;

    await mongoose.connect(uri);

    this.connected = true;
    console.log('✅ MongoDB connected');
    return mongoose;
  }
}

export default Database;

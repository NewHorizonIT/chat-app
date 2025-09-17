'use strict';

import { connect } from 'mongoose';

class Database {
  static instance = null;
  async connect() {
    const db = await connect(process.env.MONGODB_URI, {});
    return db;
  }

  static getInstance() {
    if (!this.instance) {
      const database = new Database();
      this.instance = database.connect();
    }
    return this.instance;
  }
}

export default Database;

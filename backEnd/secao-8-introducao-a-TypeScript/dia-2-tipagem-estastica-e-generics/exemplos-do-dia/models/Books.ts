// ./models/Book.ts

import connection from './connection';
import { Pool } from 'mysql2/promise';

export default class BookModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  public async getAll() {
    const result = await this.connection.execute('SELECT * FROM books');
    const [rows] = result;
    return rows;
  }
}
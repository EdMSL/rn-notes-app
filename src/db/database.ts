import * as SQLite from 'expo-sqlite';

import { INote } from '$modules/note/reducer';

const db = SQLite.openDatabase('post.db');

export class DB {
  static init() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          // 'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, isComplited INT)',
          'create table if not exists notes (id integer primary key not null, title text not null, isComplited int);',
          [],
          resolve,
          (_, error) => {
            reject(error);
            return false;
          },
        );
      });
    });
  }

  static getNotes()/* : Promise<INote[]> */ {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM notes',
          [],
          (_, { rows: { _array } }) => resolve(_array),
          (_, error) => {
            reject(error);
            return false;
          },
        );
      });
    });
  }

  static createNote({
    title,
  } : INote) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `INSERT INTO notes (title, isComplited) VALUES (?, ?)`,
          [title, 0],
          (_, result) => resolve(result.insertId),
          (_, error) => {
            reject(error);
            return false;
          },
        );
      });
    });
  }

  static removeNote(id: SQLite.SQLResultSet['insertId']) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'DELETE FROM notes WHERE id = ?',
          [id],
          resolve,
          (_, error) => {
            reject(error);
            return false;
          },
        );
      });
    });
  }

  static updateNote(note: INote) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE notes SET isComplited = ? WHERE id = ?',
          [note.isComplited ? 0 : 1, note.id],
          resolve,
          (_, error) => {
            reject(error);
            return false;
          },
        );
      });
    });
  }
}

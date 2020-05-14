import * as SQLite from 'expo-sqlite';

import { INote } from '$modules/note/reducer';

const db = SQLite.openDatabase('post.db');

export class DB {
  static init() {
    return new Promise.all([this.initNotes(), this.initSettings()]);
  }

  static initNotes() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
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

  static initSettings() {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT name FROM sqlite_master WHERE type="table" AND name="settings"',
          [],
          (_, { rows: { _array } }) => resolve(_array),
          (_, error) => {
            reject(error);
            return false;
          },
        );
      });
    })
      .then((result) => {
        if (result.length === 0) {
          return new Promise((resolve, reject) => {
            db.transaction(tx => {
              tx.executeSql(
                'create table if not exists settings (id integer primary key not null, title text not null, value null);',
                [],
                resolve,
                (_, error) => {
                  reject(error);
                  return false;
                },
              );
            });
          })
            .then(() => {
              return new Promise((resolve, reject) => {
                db.transaction(tx => {
                  tx.executeSql(
                    `INSERT INTO settings (title, value) VALUES (?, ?)`,
                    ['language', 'ru'],
                    resolve,
                    (_, error) => {
                      reject(error);
                      return false;
                    },
                  );
                });
              });
            });
        }/*  else {
          return new Promise((resolve, reject) => {
            db.transaction(tx => {
              tx.executeSql(
                'DROP TABLE IF EXISTS settings;',
                [],
                resolve,
                (_, error) => {
                  reject(error);
                  return false;
                },
              );
            });
          })
        } */
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

  static getSettings()/* : Promise<INote[]> */ {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM settings',
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

  static updateSetting(id: number, value: any) {
    return new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE settings SET value = ? WHERE id = ?',
          [value, id],
          resolve,
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

import { openDB } from 'idb';

const initdb = async () =>
// Creates a new database named 'jate' which will be using version 1 of the database.
  openDB('jate', 1, {
    // Adds database schema if it has not already been initialized.
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Creates a new object store for the data and gives it a key name of 'id' which increments automatically.
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Exports a function to POST to the database.
export const putDb = async (name, home, cell, email) => {
  console.log('Post to the database');

  // Creates a connection to the jate database and version.
  const jateDb = await openDB('jate', 1);

  // Creates a new transaction and specifies the database and data privileges.
  const tx = jateDb.transaction('jate', 'readwrite');

  // Opens up the desired object store.
  const store = tx.objectStore('jate');

  // Uses the .add() method on the store and passes in the content.
  const request = store.add({ name: name, home_phone: home, cell_phone: cell, email: email });

  // Gets confirmation of the request.
  const result = await request;
  console.log('Data saved to the database:', result);
};

// Exports a function to get the database.
export const getDb = async () => {
  console.log('Get the database');

  // Creates a connection to the jate database and version.
  const jateDb = await openDB('jate', 1);

  // Creates a new transaction and specifies the database and data privileges.
  const tx = jateDb.transaction('jate', 'readonly');

  // Opens up the desired object store.
  const store = tx.objectStore('jate');

  // Uses the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Gets confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};

// Starts database
initdb();

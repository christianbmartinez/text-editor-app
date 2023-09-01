import { openDB } from 'idb'

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists')
        return
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true })
      console.log('jate database created')
    },
  })

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    const connection = await openDB('jate', 1)
    const transaction = connection.transaction('jate', 'readwrite')
    const dataStore = transaction.objectStore('jate')
    const dbData = await dataStore.put({ id: 1, value: content })
    console.log({ message: 'PUT request to jate DB', data: dbData })
  } catch (err) {
    console.log(err)
  }
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const connection = await openDB('jate', 1)
    const transaction = connection.transaction('jate', 'readonly')
    const dataStore = transaction.objectStore('jate')
    const dbData = await dataStore.getAll()
    console.log({ message: 'GET request to jate DB', data: dbData })
    return dbData ? dbData.value : null
  } catch (err) {
    console.log(err)
  }
}

initdb()

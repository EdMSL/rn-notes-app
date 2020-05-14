import { DB } from '$db/database';

export const preload = async () => {
  try {
    await DB.init();
    console.log('Database started...');
  } catch (e) {
    console.log('Error: ', e);
  }
};
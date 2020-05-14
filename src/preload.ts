import { DB } from '$db/database';

export const preload = async () => {
  try {
    // await Font.loadAsync({
    //   'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
    //   'open-regular': require('../assets/fonts/OpenSans-Regular.ttf')
    // })
    await DB.init();
    console.log('Database started...');
  } catch (e) {
    console.log('Error: ', e);
  }
};
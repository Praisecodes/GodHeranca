import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async (key: string): Promise<string | null> => {
  let data: string | null = null;
  try {
    data = await AsyncStorage.getItem(key);
  } catch (error: any) {
    console.log(error.message);
  }
  return data;
}

export const saveData = async (key: string, data: string): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, data);
    return true;
  } catch (error: any) {
    console.log(error.message);
    return false;
  }
}

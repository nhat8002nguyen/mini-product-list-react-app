import localforage from "localforage"

localforage.config({
  driver: localforage.INDEXEDDB,
  name: "myApp",
  version: 1.0,
  storeName: "keyvaluepairs",
  description: "some description",
})

export const setItem = async (key: string, value: any): Promise<void> => {
  try {
    await localforage.setItem(key, value)
  } catch (error) {
    console.error(`Failed to set item ${key} in localforage`, error)
  }
}

export const getItem = async (key: string): Promise<any> => {
  try {
    const value = await localforage.getItem(key)
    return value
  } catch (error) {
    console.error(`Failed to get item ${key} from localforage`, error)
    return null
  }
}

export const removeItem = async (key: string): Promise<void> => {
  try {
    await localforage.removeItem(key)
  } catch (error) {
    console.error(`Failed to remove item ${key} from localforage`, error)
  }
}

export const clear = async (): Promise<void> => {
  try {
    await localforage.clear()
  } catch (error) {
    console.error("Failed to clear localforage", error)
  }
}

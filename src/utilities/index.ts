import * as localstorage from "@src/utilities/localforageUtils"

export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getSavedPhoneNumber = async (): Promise<string> => {
  return (await localstorage.getItem("phonePrefix")) + (await localstorage.getItem("phoneNumber"))
}

import axiosInstance from "./axiosInstance"

export interface Product {
  id: number
  title: string
  description: string
  price: number
  images: string[]
}

export interface Data {
  limit: number
  products: Product[]
  skip: number
  total: number
}

export const fetchProducts = async (page: number, search?: string): Promise<Product[]> => {
  try {
    const url = search
      ? `https://dummyjson.com/products/search?q=${search}&limit=20&select=title,description,price,images&skip=${
          (page - 1) * 20
        }`
      : `https://dummyjson.com/products?limit=20&select=title,description,price,images&skip=${(page - 1) * 20}`

    const response = await axiosInstance.get(url)
    const data: Data = response.data
    return data.products
  } catch (error) {
    console.error("Error fetching products:", error)
    alert("Something went wrong, please try again!")
    return []
  }
}

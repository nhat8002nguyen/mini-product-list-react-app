import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

interface Data {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}

interface ProductListProps { }

const ProductListPage: React.FC<ProductListProps> = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const fetchProducts = useCallback(
    async (page: number, search?: string): Promise<Product[]> => {
      try {
        const url = search
          ? `https://dummyjson.com/products/search?q=${search}&limit=20&select=title,description,price,images&skip=${(page - 1) * 20}`
          : `https://dummyjson.com/products?limit=20&select=title,description,price,images&skip=${(page - 1) * 20}`;

        const response = await fetch(url);
        const data: Data = await response.json();
        return data.products;
      } catch (error) {
        console.error('Error fetching products:', error);
        alert("Something went wrong, please try again!")
        return [];
      }
    },
    []
  );

  const loadMoreProducts = useCallback(async (products: Product[], currentPage: number, searchTerm?: string) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const newProducts = await fetchProducts(currentPage + 1, searchTerm);
      setProducts([...products, ...newProducts]);
      setCurrentPage(currentPage + 1);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, fetchProducts]);

  const debouncedSearch = useCallback(debounce((term: string) => {
    loadMoreProducts([], 0, term);
  }, 1000), [])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
  };

  // Initially load product data.
  useEffect(() => {
    const initialLoad = async () => {
      const initialProducts = await fetchProducts(1);
      setProducts(initialProducts);
    };

    initialLoad();
  }, [fetchProducts]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100
    ) {
      loadMoreProducts(products, currentPage, searchTerm);
    }
  }, [loadMoreProducts, products, currentPage, searchTerm]);

  // add scroll event handler to fetch products when page reaches end. 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className='flex flex-col items-center gap-8'>
      <h1 className='text-2xl'>
        Product List
      </h1>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-lg p-2 mb-4"
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <li key={product.id} className="border rounded-lg shadow-md p-4">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg mb-2"
              />
              <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 line-clamp-3">
                {product.description}
              </p>
            </li>
          ))}
          <li className="text-center">
            {isLoading && <p>Loading more products...</p>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductListPage;

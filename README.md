# mini-product-list-react-app

## How to run:
1. Install yarn with npm:
  `$ npm install --global yarn`
2. Install packages:
  `$ yarn install`
3. Run the program:
  `$ yarn start`
4. Visit the http://localhost:3000 to test this app.

## Description:
Component Name: ProductListPage

### Purpose:
This component renders a paginated and searchable list of products fetched from an external API (https://dummyjson.com/products). It provides infinite scrolling functionality, dynamically loading more products as the user scrolls down the page.

### Key Features:
Product Display: Presents products in a grid layout, showing product images, titles, prices, and brief descriptions.

Search: Includes a search bar to filter products based on the user's input. The search is debounced to optimize performance.
Pagination (Infinite Scrolling): Implements infinite scrolling, automatically fetching and appending the next set of products when the user nears the bottom of the page.
Loading Indication: Displays a "Loading more products..." message while fetching additional products.
Error Handling: Includes basic error handling to display an alert if product fetching fails.

### Data Fetching:
API: Uses the dummyjson.com API to retrieve product data.
Fetch Function: The fetchProducts function is responsible for fetching product data based on the current page and optional search term.
Initial Load: Fetches the first page of products on the component mount.
Search: Triggers a new product fetch when the search term changes.
Infinite Scroll: Triggers a fetch for the next page of products when the user scrolls near the end of the page.

### State Management:
currentPage: Tracks the current page number for pagination.
products: Stores the fetched product data.
isLoading: Indicates whether products are currently being fetched.
searchTerm: Stores the current search term entered by the user.

### Possible Enhancements:
Filtering/Sorting: Add options to filter or sort products based on various criteria.
Detailed Product View: Implement navigation to a separate page or modal to display more detailed product information.
User Interactions: Add features like adding products to a cart or wishlist.

Overall, the ProductListPage component provides a functional foundation for displaying and interacting with a paginated and searchable product list. It can serve as a starting point for building more complex e-commerce or product browsing interfaces.

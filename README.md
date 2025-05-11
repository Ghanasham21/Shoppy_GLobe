# Shoppy_GLobe
Shoppy GLobe

# ShoppyGlobe E-commerce Application

This project is a basic e-commerce application named ShoppyGlobe, built with React. It allows users to browse products, view product details, and manage a shopping cart.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **React Router DOM:** For implementing client-side routing.
* **Redux:** For managing the application's state, especially the shopping cart.
* **React Redux:** To connect React components to the Redux store.
* **`useEffect` Hook:** For handling side effects like data fetching.
* **`useState` Hook:** For managing local component state.
* **`useParams` Hook:** To access route parameters in components.
* **`useDispatch` Hook:** To dispatch actions to the Redux store.
* **`useSelector` Hook:** To access data from the Redux store.
* **`React.lazy` and `Suspense`:** For code splitting and lazy loading components to improve performance.
* **`prop-types`:** For type checking component props.
* **CSS:** For styling the application.

## Features

* **Home Page:** Displays a list of products fetched from an API.
* **Product Listing:** Shows product images, titles, and prices with an "Add to Cart" button.
* **Product Detail Page:** Displays detailed information about a selected product, including images and description.
* **Shopping Cart:** Allows users to view items added to the cart and remove items.
* **Basic Navigation:** Includes a header with links to the home page and the shopping cart.
* **Search Functionality:** Enables users to filter products by title or description on the product listing page.
* **404 Page:** Displays a "Page Not Found" message for unknown routes.
* **Lazy Loading:** Implemented for main page components to improve initial load time.
* **Responsive Design:** Basic CSS styling to ensure the application works reasonably well on different screen sizes.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_GITHUB_REPOSITORY_URL>
    cd shoppy-globe
    ```
    *(Replace `<YOUR_GITHUB_REPOSITORY_URL>` with the actual URL of your GitHub repository)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

    This command will start the React development server, and you should be able to view the application in your browser, usually at `http://localhost:3000`.

## Project Structure

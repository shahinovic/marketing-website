# Marketing Website

This is a marketing website built using Vite, React.js, Redux, and Redux Toolkit. The website showcases various products and allows users to add items to their cart.

## Project Structure

The project structure is as follows:

```
src
├── app
│   └── store.js
├── App.css
├── App.jsx
├── components
│   ├── contact
│   │   └── Contact.jsx
│   ├── footer
│   │   ├── Footer.css
│   │   └── Footer.jsx
│   ├── homePage
│   │   ├── FeatureProduct
│   │   │   ├── FeatureProduct.css
│   │   │   └── FeatureProduct.jsx
│   │   ├── Home.css
│   │   └── Home.jsx
│   ├── index.js
│   ├── MyCart
│   │   ├── Cart.css
│   │   └── Cart.jsx
│   ├── MyShop
│   │   ├── ShopCard.jsx
│   │   ├── Shop.css
│   │   └── Shop.jsx
│   ├── navbar
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   └── Search.jsx
│   ├── ProductCard
│   │   ├── ProductCard.css
│   │   └── ProductCard.jsx
│   ├── productDetails
│   │   ├── ProductDetails.css
│   │   └── ProductDetails.jsx
│   ├── productsSlider
│   │   ├── ProductsSlider.css
│   │   └── ProductsSlider.jsx
│   └── slider
│       ├── SliderComponent.css
│       └── SliderComponent.jsx
├── main.jsx
├── reduxServices
│   └── ProductsApi.js
└── slices
    ├── cartSlice.js
    └── navbarSlice.js
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your/repository.git
   ```

2. Install the dependencies:

   ```shell
   cd marketing-website
   npm install
   ```

3. Start the development server:

   ```shell
   npm run dev
   ```

   The website will be accessible at `http://localhost:3000`.

## Features

- The home page (`Home.jsx`) displays featured products (`FeatureProduct.jsx`) and a products slider (`ProductsSlider.jsx`).
- The navigation bar (`Navbar.jsx`) allows users to search for products and access their cart (`Cart.jsx`).
- The shop page (`Shop.jsx`) displays a list of products (`ShopCard.jsx`).
- The product details page (`ProductDetails.jsx`) shows detailed information about a specific product.
- Users can add items to their cart and view the contents of the cart.

## Redux Store

The Redux store configuration can be found in `app/store.js`. The following slices are available:

- `cartSlice.js`: Manages the state related to the shopping cart.
- `navbarSlice.js`: Manages the state related to the navigation bar and search functionality.

## API Integration

The file `reduxServices/ProductsApi.js` provides integration with the backend API for fetching products and other related operations.

## Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


# Foodah 🍽️

[![Vercel](https://img.shields.io/badge/Hosted%20on-Vercel-blue.svg)](https://foodah.vercel.app/)

Foodah is a dynamic, responsive website that integrates various APIs and custom-built components to deliver a seamless user experience. This project showcases advanced data fetching, error handling, and performance optimizations, along with a stylish and intuitive design.

## 🚀 [Live Demo](https://foodah.vercel.app/)

## Technologies Used

- **JavaScript**
- **React**
- **Tailwind CSS**: `tailwindcss`
- **PostCSS**: `postcss`
- **React Router Dom**
- **React Icons**
- **Email.js**
- **Build Tool**: `Parcel`

## Features

### 🧭 Navigation

- **Quick Routes**: Easily access important sections like **About Developer**, **About Site**, **Contact Us**, and **Network Status**.
- **Enhanced User Experience**: Intuitive layout and organization for smooth browsing.

### 📊 Data Fetching

1. **Swiggy API Integration**
   - **Live Data**: Retrieves current data directly from Swiggy's hosted API.
   - **Error Handling**: Uses optional chaining for graceful error management.
2. **GitHub API Integration**
   - **Dynamic Content**: Fetches developer data from the GitHub API for the **About** section.
   - **Interactive Display**: Keeps the **About** section updated in real-time.

### ❌ Error Management

- **Error Component**: Displays user-friendly error messages for incorrect routes, enhancing navigation and recovery from issues.

### ✨ Shimmer UI

- **Loading Experience**: Implements a shimmer UI effect for an engaging loading experience while fetching content.

### 🔄 Custom Hooks

1. **`useOnlineStatus`**
   - Detects the user's online status and updates the navbar accordingly.
   - Displays a clear error message when offline.
2. **`useRestaurantMenu.js`**
   - Fetches restaurant menu data from the API.
3. **`useFallbackImage.js`**
   - Handles image loading failures by substituting missing images with random alternatives.

### 🔗 Personalized Footer

- **Developer Information**: Displays relevant information about the developer, including contact details and important links.

### 🎨 Design & Development

- **Stylish Design**: Aesthetically pleasing and functional design for a smooth user experience.

### 🚀 Performance Optimization

- **Lazy Loading & Suspense**: Utilizes lazy loading and suspense to optimize performance, especially with large data sets (approx. 14,000 JSON lines).

### 🔍 Detailed Documentation

- **Comprehensive Resources**: For more insights, visit the developer’s blogs or portfolio for in-depth notes and a detailed project description.

## Problems Faced & Solutions

1. **Large Data Handling**: Deep reading of routes for effective data destructuring.
2. **Frequent Data Changes**: Encountered errors due to dynamic API data.
3. **CORS Issues**: Used CORS proxy solutions for development.
4. **Deployment Issues**: Updated dependencies and managed nested routes to avoid 404 errors.
5. **Image Loading Time**: Implemented lazy loading for image optimization.
6. **Undefined Image Handling**: Created a custom hook to handle image loading failures with fallback images.

## Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or Yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone [https://github.com/your-username/foodah.git](https://github.com/AmanSuryavanshi-1/Foodah)
   cd foodah
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Using Yarn:

   ```bash
   yarn install
   ```

### Running the Project Locally

1. **Start the Development Server**

   Using npm:

   ```bash
   npm start
   ```

   Using Yarn:

   ```bash
   yarn start
   ```

2. **Open in Browser**

   Visit `http://localhost:3000` to view the app in the browser.

### Building for Production

1. **Build the Project**

   Using npm:

   ```bash
   npm run build
   ```

   Using Yarn:

   ```bash
   yarn build
   ```

2. **Serve the Build**

   The production-ready files will be in the `dist` folder. You can serve these files using any static server.

### Deployment

Foodah is deployed using Vercel. To deploy your own version:

1. **Push to GitHub**

   Ensure your changes are committed and pushed to your GitHub repository.

2. **Deploy on Vercel**

   - Go to [Vercel](https://vercel.com/).
   - Click **New Project** and select your GitHub repository.
   - Configure the settings if necessary and click **Deploy**.

   Vercel will automatically build and deploy your project.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues page](https://github.com/your-username/foodah/issues).

## License

This project is licensed under the [MIT License](LICENSE).

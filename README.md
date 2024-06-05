# Nature Explorer

Nature Explorer is a web application that provides real-time weather updates, showcases nature photos, and displays the latest environmental news. This document provides an overview of the application and its features.

## Home Page

On the Home page, you will find two main sections:

- **Left Side**: Displays real-time weather information including temperature, wind speed, date, time, city, and country. This data is fetched using the OpenWeatherMap API. WebSockets are used to ensure that the weather information is updated in real-time, providing users with the most current weather conditions.
- **Right Side**: Features a carousel of nature and spot photos. This dynamic display of images enhances the visual appeal of the homepage.

## Weather Page

The Weather page uses the OpenWeatherMap API to fetch current weather updates and temperature. Here’s a detailed breakdown:

- **API Usage**: OpenWeatherMap API is used to get weather data such as temperature, wind speed, and other relevant weather information.
- **WebSocket**: WebSocket is utilized to deliver real-time weather updates. This ensures that users always see the most current weather data without needing to refresh the page.

## Gallery Page

The Gallery page is designed as a grid that showcases various images. These images change based on user interactions and page refreshes.

- **API Usage**: Unsplash API is used to fetch random nature images. Every time the user visits the Gallery page or refreshes it, new images are loaded, providing a fresh visual experience each time.

## News Page

The News page displays the latest news articles, specifically focusing on news from the Philippines.

- **API Usage**: NewsAPI is used to fetch the latest news articles. The content is updated depending on the day and time, ensuring that users always have access to the most recent news.
- **Philippines Focus**: Only news related to the Philippines is displayed, making the content relevant for users interested in Philippine news.

## Features Summary

1. **Real-Time Weather Updates**: Utilizes OpenWeatherMap API and WebSockets to provide up-to-date weather information.
2. **Dynamic Photo Gallery**: Uses Unsplash API to fetch and display random nature photos, ensuring a new experience on each visit or refresh.
3. **Latest Environmental News**: Fetches current news articles using NewsAPI, focusing on Philippine news and providing the most recent updates.

## Getting Started

Follow these simple steps to set up and explore **Nature Explorer**:

1. **Open Terminal and Start WebSocket Server**
   - Navigate to the project directory in your terminal.
   - Type `npm start` to initiate the WebSocket server for real-time weather updates.
2. **Launch Live Server**
   - Ensure you have a live server extension installed in your code editor.
   - Start the live server to view the web application's output.
3. **Replace Placeholder API Keys**
   - Locate the placeholder API keys in the code.
   - Replace them with your own API keys for OpenWeatherMap, Unsplash, and News API.
4. **Run the Application**
   - Open `index.html` in your browser to start exploring **Nature Explorer**.

By following these steps, you'll be up and running with **Nature Explorer** in no time, enjoying real-time weather updates, stunning nature photos, and the latest environmental news.

## Conclusion

Nature Explorer combines real-time data and dynamic content from various APIs to provide a comprehensive and engaging user experience. From up-to-the-minute weather updates to a constantly changing gallery of nature photos and the latest environmental news, users are always presented with fresh and relevant information.

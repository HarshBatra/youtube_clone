# YouTube Clone

Welcome to YouTube Clone, a frontend project that replicates the functionalities of YouTube's main features including video browsing, search suggestions, video watching, comment section, and live chat. This project is built with a focus on clean UI design and efficient data management, utilizing YouTube's Live API data.

## Features

- **Home Page**: Displays popular videos fetched from YouTube's Live API.
- **Search Bar**: Provides search suggestions using YouTube's Search Suggestions API. Optimized with debouncing to reduce unnecessary API calls and caching using Redux to enhance efficiency.
- **Search Results**: Clicking on a search suggestion updates the video list based on the search query.
- **Watch Page**: View videos along with a comment section powered by YouTube's Comment API and a Live Chat Section simulating real YouTube live chat.
- **Live Chat**: Uses API Polling to fetch live chat messages at regular intervals. Utilizes Redux Toolkit for state management and optimizes data retrieval with garbage collection.

## Technologies Used

- **React.js**: For building user interfaces and managing application state.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Redux Toolkit**: A package that includes utilities to simplify Redux development.
- **React-Redux**: Official React bindings for Redux.
- **Express.js**: Used for creating a simple backend to bypass CORS issues with APIs.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HarshBatra/youtube_clone.git
   ```

2. Install dependencies for client and server both:
   ```bash
   cd youtube_clone
   cd ./client
   npm install
   cd ..
   cd ./server
   npm install
   ```

## Configuration

Create a `.env` file in the client directory with the following content:

```
REACT_APP_GOOGLE_API_KEY = your google api key
```

## Usage

1. Start the server:

   ```bash
   cd ./server
   npm run start
   ```

2. Start the client:

   ```bash
   cd ./client
   npm run start
   ```

3. Open your browser and visit `http://localhost:3000` to use youtube_clone.

## Acknowledgements

- Special thanks to YouTube for providing the APIs necessary to build this project.
- Inspired by the user experience of the real YouTube platform.

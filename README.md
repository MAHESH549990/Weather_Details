# 🌦️ Weather Details

A simple and responsive weather application built with **React and Vite** that allows users to search for a city and view its current weather information.

## 🚀 Live Demo

🔗 **Live Website:** [Add your Render deployment URL here]

## ✨ Features

- 🔍 **Search by City:** Enter a city name to check its weather.
- 🌡️ **Current Temperature:** View the current temperature in Celsius.
- 📈 **Temperature Details:** Check the maximum and minimum temperatures.
- 🌤️ **Weather Conditions:** View the current weather description.
- 🤗 **Feels Like:** See how the temperature feels.
- ⚡ **Fast Development:** Powered by Vite for a fast development experience.
- 📱 **Responsive Interface:** Designed to provide a convenient weather-search experience.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **UI Components:** Material UI (MUI)
- **Icons:** Material UI Icons
- **API:** OpenWeatherMap Current Weather API
- **Deployment:** Render
- **Language:** JavaScript (ES6+)

## 📁 Project Structure

```text
Weather_Details/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBox.jsx
│   │   └── ShowWeather.jsx
│   ├── WeatherApp.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

_Note: Update the component paths above if your actual folders are organized differently._

## ⚙️ Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/MAHESH549990/Weather_Details.git
```

### 2. Navigate to the Project

```bash
cd Weather_Details
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure the API Key

Create a `.env` file in the project root, alongside `package.json`.

Add your OpenWeatherMap API key:

```env
VITE_API_KEY=your_openweathermap_api_key
```

Get an API key from [OpenWeatherMap](https://openweathermap.org/api).

**Important:** Never commit your `.env` file or share your API key publicly. Vite exposes variables prefixed with `VITE_` in client-side JavaScript, so this setup does not keep the key secret. A backend proxy is needed to protect it.

### 5. Start the Development Server

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 🧩 Component Overview

### 1. `SearchBox.jsx`

The search component accepts a city name from the user. It manages the input using React state and requests weather data from the OpenWeatherMap API.

**Responsibilities:**

- Capture the city name.
- Handle form submission.
- Fetch weather data.
- Process the API response.

### 2. `ShowWeather.jsx`

The weather display component presents the weather information for the selected city.

**Weather details include:**

- Current temperature
- Maximum temperature
- Minimum temperature
- Feels-like temperature
- Weather description

### 3. `WeatherApp.jsx`

The parent component connects `SearchBox` and `ShowWeather`.

It coordinates the search and weather display so that the information returned for a city can be passed to the weather component through React props.

## 🌐 API Information

This project uses the OpenWeatherMap Current Weather API.

**Endpoint:**

```text
https://api.openweathermap.org/data/2.5/weather
```

The API provides current weather information for a specified city. The request uses the city name, API key, and metric units to retrieve temperature values in Celsius.

## 🏗️ Build for Production

Create an optimized production build:

```bash
npm run build
```

Vite generates the production files inside the `dist/` directory.

Preview the production build locally:

```bash
npm run dev
```

## ☁️ Deployment

This project can be deployed on [Render](https://render.com/) as a **Static Site**.

Configure the following settings:

| Setting           | Value                                                   |
| ----------------- | ------------------------------------------------------- |
| Root Directory    | Leave empty if `package.json` is in the repository root |
| Build Command     | `npm install && npm run build`                          |
| Publish Directory | `dist`                                                  |

Add `VITE_API_KEY` in the Render environment settings before deploying. Since Vite embeds this variable in the client bundle, use a backend proxy if the API key must remain private.

## 🎯 Learning Objectives

This project helped me practise:

- Building reusable React components.
- Managing input with `useState`.
- Handling form submissions.
- Passing data between parent and child components using props.
- Fetching data from an external API.
- Using environment variables in Vite.
- Building and deploying a React application.

## 🔮 Future Improvements

- Add loading indicators while fetching weather data.
- Display friendly error messages for invalid city names.
- Add weather icons and more detailed forecasts.
- Improve the responsive design.
- Add a multi-day weather forecast.
- Move API requests to a backend to protect the API key.

## 👨‍💻 Author

**Mahesh Bhatt**

- GitHub: [@MAHESH549990](https://github.com/MAHESH549990)

---

⭐ If you find this project useful, consider giving the repository a star!

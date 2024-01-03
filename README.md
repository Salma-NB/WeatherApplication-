# Weather App

A simple weather app built with HTML, CSS, and JavaScript.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)

## Description

Weather App JS is a lightweight application that allows users to check the current weather conditions for a given location. It provides a straightforward interface to retrieve up-to-date weather information quickly.

## Features

- **Current Weather:** View the current temperature, humidity, wind speed, and weather conditions.
- **Location Search:** Enter the name of a city to get the weather details for that location.
- **Responsive Design:** Access the app on various devices with a user-friendly layout.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Salma-NB/weatherApplication-.git
    cd your-weather-app
    ```

2. Open `index.html` in your web browser.

## Usage

1. Open the app in your browser.
2. Enter the name of the city in the search bar.
3. Click the "Get Weather" button to retrieve the current weather information.

## API

The weather data is fetched from the [OpenWeatherMap API](https://openweathermap.org/). You will need to sign up for an API key and replace the placeholder in the JavaScript code.

```javascript
// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${apiKey}`;

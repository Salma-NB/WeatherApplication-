        
        const apiKey = "bd847d632114a1c9425cd91ae77afb45";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

        const searchBox = document.querySelector(".search input");
        const searchButton = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

       //updating function to get weather data
        async function getWeatherData(city) {
            const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
            return response.json();
        }
        
       // functio to set weather data on the DOM  
       function setWeatherData(data)  { 

              //  var data = await response.json();
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
                document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
                document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";

                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "weatherImages/clouds.png";
                }

                else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "weatherImages/rain.png";
                }
                else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "weatherImages/clear.png";
                }
                else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "weatherImages/mist.png";
                }
                else if (data.weather[0].main == "Snow") {
                    weatherIcon.src = "weatherImages/snow.png";
                }
                else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "weatherImages/drizzle.png";
                }

                
        }
        //function to handle errors 
        function handleErrors(){
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".error").style.display = "block";

        }

        //Main Function to check the weather
        async function checkWeather(city){
            try {
                const data= await getWeatherData(city);
                if (data.cod == "404") {
                    handleErrors();
                }else{
                    setWeatherData(data);
                    document.querySelector(".weather").style.display = "block";
                    document.querySelector(".error").style.display = "none";

                }

            } catch (error) {
                console.error("Error in getting weather data", error);
                handleErrors();
            }
        }

        searchButton.addEventListener("click", () => {
            checkWeather(searchBox.value);
        })
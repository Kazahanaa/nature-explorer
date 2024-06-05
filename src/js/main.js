// nature

document.addEventListener("DOMContentLoaded", () => {
  const weatherInfo = document.getElementById("temperature");
  const timeAndDate = document.getElementById("time");
  const today = document.getElementById("day");
  const city = document.getElementById("city");
  const real_feel = document.getElementById("real_feel");
  const wind = document.getElementById("wind");

  const photoGallery = document.getElementById("photoGallery");
  const newsArticles = document.getElementById("news-articles");

  //  Nature Photos
  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random?query=nature&count=9&client_id=Dl3plNW8IeT-fxZAA7BWAxjnv0KhiE4fhTNw0WeMvIk"
      );
      const data = await response.data;

      photoGallery.innerHTML = data
        .map(
          (photo) => `<div class="gallery-item">
                        <img class="gallery-img" src="${photo.urls.small}" alt="Nature Photo">
                    </div>`
        )
        .join("");
    } catch (error) {
      photoGallery.innerHTML = "<p>Failed to fetch photos</p>";
    }
  };

  //  News Articles
  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=Philippines&apiKey=0c3581f844fb473994a9b0a478a67948"
      );
      const data = await response.data;
      const articles = data.articles.slice(7, 15);

      newsArticles.innerHTML = articles
        .map(
          (article) => `
            <article>
                <h3>${article.title}</h3>
                ${
                  article.urlToImage
                    ? `<img src="${article.urlToImage}" alt="${article.title}">`
                    : ""
                }
                <p>${article.description}</p>
            </article>
        `
        )
        .join("");
    } catch (error) {
      newsArticles.innerHTML = "<p>Failed to fetch news articles</p>";
    }
  };

  // start websocket
  // WebSocket
  const ws = new WebSocket("ws://localhost:3001");
  ws.onmessage = async (event) => {
    const data = JSON.parse(event.data);
    const currentTemperature = Math.round(data.main.temp - 273.15);
    const currentLocation = data?.name;
    const currentTimeAndDate = data?.dateTime;
    const day = data?.day;
    const weather_wind = data?.wind.speed;
    const weather_real_feel = Math.round(data?.main.feels_like - 273.15);

    // console.log(data);
    // //html outputs
    weatherInfo.innerHTML = `${currentTemperature} <span>°</span>`;
    timeAndDate.innerHTML = currentTimeAndDate;
    today.innerHTML = day;
    city.innerHTML = currentLocation;
    real_feel.innerHTML = `${weather_real_feel} <span>°</span>`;
    wind.innerHTML = `${weather_wind} km/h`;
  };

  // Initial Fetches
  // fetchWeather();
  fetchPhotos();
  fetchNews();
});

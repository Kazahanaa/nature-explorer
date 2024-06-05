// nature

const WebSocket = require("ws");
const axios = require("axios");
const { format } = require("date-fns");

const wss = new WebSocket.Server({ port: 3001 });
const apiKey = "b0b7029746ba511d0995b0aeec9bd751";
const city = "Angeles City";
const todayApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
  city
)}&appid=${apiKey}`;

wss.on("connection", async (ws) => {
  setInterval(async () => {
    try {
      const response = await axios.get(todayApiUrl);
      const data = response.data;

      console.log("result", JSON.stringify(data));
      ws.send(
        JSON.stringify({
          ...data,
          day: format(new Date(), "eeee"),
          dateTime: format(new Date(), "MMM dd, yyyy, HH:mm:ss"),
        })
      );
    } catch (error) {
      console.error(error.message);
    }
  }, 300);
});

console.log("WebSocket server is running on ws://localhost:3001");

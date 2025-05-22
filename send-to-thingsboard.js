import fetch from 'node-fetch';

const accessToken = "PYnZH9i8HmoYZNZY7uSS";
const url = `https://eu.thingsboard.cloud/api/v1/${accessToken}/telemetry`;


function generateSingleTrueData() {
  const lights = ['red', 'green','yellow'];
  const selected = lights[Math.floor(Math.random() * lights.length)];

  const data = {
    red: selected === 'red',
    green: selected === 'green',
    yellow: selected === 'yellow'
  };

  console.log(" Gönderilecek veri:", data);
  return data;
}


function sendData() {
  const data = generateSingleTrueData();

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      console.log(" Veri gönderildi");
    })
    .catch(err => {
      console.error(" Hata:", err.message);
    });
}

setInterval(sendData, 5000);

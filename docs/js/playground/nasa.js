const apiKey = 'NmJMd2hpUVJUbEJkWDlhNTdZQnJNZjU5S2lGWEMwN25kbHhicGxhRw==';
const k = atob(apiKey);
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${k}`;

function fetchData() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const cachedData = localStorage.getItem('apodData' + year + month + day);
  if (cachedData) {
    const data = JSON.parse(cachedData);
    displayData(data);
  } else {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('apodData', JSON.stringify(data));
        displayData(data);
      });
  }
}

function displayData(data) {

  const img = document.createElement('img');
  img.src = data.hdurl;
  description = data.explanation;
  document.querySelector('#apod-image').appendChild(img);

  const title = document.querySelector('#apod-title');
  title.textContent = data.title;

  const date = document.querySelector('#apod-date');
  date.textContent = "Shot on " + data.date;

  const explanation = document.querySelector('#apod-desc');
  explanation.textContent = data.explanation;
}

fetchData();
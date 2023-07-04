# NASA

!!! abstract "API Source"
    <div style="text-align: center;align: center">
        <img src="https://api.nasa.gov/assets/img/favicons/favicon-192.png" style="width: 30px;height: auto;display: inline-block;vertical-align: middle">
        <div style="vertical-align: middle;display: inline-block;">
            <a href="https://api.nasa.gov/?search=APOD">
                Astronomy Picture of the Day
            </a>
        </div>
    </div>




!!! quote "APOD"
    <h3 style="text-align: center;font-weight:bold;" id="apod-title"></h3>
    <div style="text-align: right;font-style: italic" id="apod-date"></div>
    > <div id="apod-desc"></div>

    <div id="apod-image"></div>


<script>
const apiKey = 'NmJMd2hpUVJUbEJkWDlhNTdZQnJNZjU5S2lGWEMwN25kbHhicGxhRw==';
const k = atob(apiKey);
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${k}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
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
    });
</script>

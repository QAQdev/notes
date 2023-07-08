# Are you Bored?

!!! abstract "API Source"
    <div style="text-align: center;align: center">
        <div style="vertical-align: middle;display: inline-block;">
            <a href="https://www.boredapi.com/">
                Bored API: Let's find you something to do
            </a>
        </div>
    </div>

!!! quote "Find something to do"
    <center>
        <div id="activity"></div>
        <div><a id="link"></a></div>
    <center>

<script>
    fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => {

        console.log(data);
        const activity = document.querySelector('#activity');
        activity.textContent = data.activity;

        if(!(data.link === "")) {
            const link = document.querySelector('#link');
            link.textContent = '🔗 ' + data.link;
            link.href = data.link;
        }
    });
</script>
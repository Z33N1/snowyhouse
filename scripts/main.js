document.addEventListener('DOMContentLoaded', function() {
    // Set initial theme to night
    document.body.classList.add('night-theme');
    document.body.classList.remove('day-theme');

    document.getElementById('theme-switch').addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('night-theme');
            document.body.classList.remove('day-theme');
        } else {
            document.body.classList.add('day-theme');
            document.body.classList.remove('night-theme');
        }
    });

    document.getElementById('set-button').addEventListener('click', function() {
        const numSnowflakes = document.getElementById('snowflake-input').value;
        createSnowflakes(numSnowflakes);
    });

    function createSnowflakes(num) {
        const container = document.getElementById('snowflakes-container');
        container.innerHTML = '';
        for (let i = 0; i < num; i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.style.left = Math.random() * 100 + '%';
            snowflake.style.width = Math.random() * 10 + 5 + 'px';
            snowflake.style.height = snowflake.style.width;
            snowflake.style.animationDuration = Math.random() * 5 + 2 + 's';
            snowflake.style.animationDelay = Math.random() * 5 + 's';
            snowflake.style.opacity = Math.random() * 0.5 + 0.5;
            snowflake.innerHTML = Math.random() > 0.5 ? '❅' : '❆';
            container.appendChild(snowflake);
        }
    }
});
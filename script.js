let isDay = false;

function switchFunction() {
    let switchImg = document.getElementById("switchImg");
    let card = document.querySelector('.card-body');
    let footer = document.querySelector('.card-footer');
    let mainImg = document.getElementById('mainImg');
    let body = document.body;

    card.classList.add('hidden');
    footer.classList.add('hidden');
    mainImg.classList.add('hidden');

    setTimeout(() => {
        if (isDay) {
            body.classList.remove('day-mode');
            body.classList.add('night-mode');

            card.classList.remove('day-card');
            card.classList.add('night-card');
            footer.classList.remove('day-footer');
            footer.classList.add('night-footer');

            footer.classList.add('bg-white', 'text-dark')

            switchImg.src = "moon_img.png";
        } else {
            body.classList.remove('night-mode');
            body.classList.add('day-mode');

            card.classList.remove('night-card');
            card.classList.add('day-card');
            footer.classList.remove('night-footer');
            footer.classList.add('day-footer');

            footer.classList.remove('bg-white', 'text-dark')

            switchImg.src = "sun_img.png";
        }

        if (isDay) {
            document.getElementById('time').textContent = "Time: 22:08 PM";
            document.getElementById('mainTemperature').textContent = "23°C";
            document.getElementById('mainDesc').textContent = "Weather: Clear Night";
            mainImg.src = "Moon_Night-512.webp";
        } else {
            document.getElementById('time').textContent = "Time: 11:15 AM";
            document.getElementById('mainTemperature').textContent = "28°C";
            document.getElementById('mainDesc').textContent = "Weather: Very sunny";
            mainImg.src = "sunny.png";
        }

        isDay = !isDay;

        card.classList.remove('hidden');
        footer.classList.remove('hidden');
        mainImg.classList.remove('hidden');
    }, 500);
}

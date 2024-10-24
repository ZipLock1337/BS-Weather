function switchFunction() {
    let switchImg = document.getElementById("switchImg");
    let card = document.querySelector('.card-body');
    let time = document.getElementById('time');
    let mainImg = document.getElementById('mainImg');
    let mainTemperature = document.getElementById('mainTemperature');
    let mainDesc = document.getElementById('mainDesc');
    let footer = document.querySelector('.card-footer');

    // Card body style
    card.style.background = "#fff";
    card.style.color = "#000";

    // Footer style
    footer.style.background = "#000";
    footer.style.color = "#fff";

    time.textContent = "Time: 11:15 AM";
    mainTemperature.textContent = "28°C"
    mainDesc.textContent = "Weather: Very sunny";
    mainImg.src = "sunny.png";
    switchImg.src = "sun_img.png"
}
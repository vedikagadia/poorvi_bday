function toggleLights() {
    var body = document.getElementById('birthday-body');
    var content = document.getElementById('content');
    var lightsButton = document.getElementById('lights-button');

    if (body.classList.contains('lights-off')) {
        body.classList.remove('lights-off');
        body.classList.add('lights-on');
        content.style.display = 'block';
        lightsButton.style.display = 'none'; // Hide the button
    } else {
        body.classList.remove('lights-on');
        body.classList.add('lights-off');
        content.style.display = 'none';
        lightsButton.style.display = 'block'; // Show the button
    }
}

function blowOutCandle() {
    // Change the cake image to a cake with no candle
    var cakeImg = document.getElementById('cake-img');
    cakeImg.src = "assets/img/cake_no_flame.png";

    // Add 20 balloons flying on the page
    for (var i = 0; i < 20; i++) {
        var balloon = document.createElement('img');
        balloon.src = "assets/img/balloon.png";
        balloon.classList.add('balloon');

        // Randomly position the balloon along the x-axis and y-axis
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.top = Math.random() * window.innerHeight + 'px';

        document.body.appendChild(balloon);
    }
}

function openCard(card) {
    var overlay = document.getElementById('overlay');
    var img = card.querySelector('img');
    var text = card.querySelector('.text-box');
    var cloneImg = img.cloneNode();
    var cloneText = text.cloneNode(true);
    var cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    cardContainer.appendChild(cloneImg);
    cardContainer.appendChild(cloneText);
    overlay.innerHTML = '';
    overlay.appendChild(cardContainer);
    overlay.style.display = 'flex';

    // Add a slight delay before starting the rotation to ensure that the image has loaded
    setTimeout(function() {
        overlay.classList.add('open');
    }, 100);
}

window.onclick = function(event) {
    var overlay = document.getElementById('overlay');
    if (event.target == overlay) {
        overlay.style.display = 'none';
        overlay.classList.remove('open');
    }
}

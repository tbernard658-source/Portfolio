// script.js
function showContent(eventId) {
    const content = document.getElementById('content');
    const contentTitle = document.getElementById('content-title');
    const contentText = document.getElementById('content-text');
    const contentImage = document.getElementById('content-image');

    // En fonction de l'événement cliqué, mettre à jour le contenu
    if (eventId === 1) {
        contentTitle.textContent = "Événement 1";
        contentText.textContent = "Ceci est la description de l'événement 1.";
        contentImage.src = "images/image1.jpg"; // Remplace par ton image
    } else if (eventId === 2) {
        contentTitle.textContent = "Événement 2";
        contentText.textContent = "Ceci est la description de l'événement 2.";
        contentImage.src = "images/image2.jpg"; // Remplace par ton image
    } else if (eventId === 3) {
        contentTitle.textContent = "Événement 3";
        contentText.textContent = "Ceci est la description de l'événement 3.";
        contentImage.src = "images/image3.jpg"; // Remplace par ton image
    } else if (eventId === 4) {
        contentTitle.textContent = "Événement 4";
        contentText.textContent = "Ceci est la description de l'événement 4.";
        contentImage.src = "images/image4.jpg"; // Remplace par ton image
    } else if (eventId === 5) {
        contentTitle.textContent = "Événement 5";
        contentText.textContent = "Ceci est la description de l'événement 5.";
        contentImage.src = "images/image5.jpg"; // Remplace par ton image
    }

    content.style.display = 'block'; // Affiche le contenu
}

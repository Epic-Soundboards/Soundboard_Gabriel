// Diese Funktion wird aufgerufen, wenn man auf einen HTML-Button klickt
function playSound(dateiname) {
    // Sucht die Datei im Ordner 'sounds/' und spielt sie ab
    let audio = new Audio('sounds/' + dateiname);
    audio.play();
}
const divs = document.getElementsByTagName('div');
if (divs.length >= 5) {
    divs[0].innerText = 'Első';
    divs[2].innerText = 'Harmadik';
    divs[4].innerText = 'Utolsó';
    
    for (let i = 0; i < divs.length; i++) {
        if (!divs[i].innerText) {
            divs[i].innerText = 'Index: ' + (i + 1);
        }
        console.log('A művelet rendben lezajlott.');
    }
} else {
    console.error('Nem egyezik a div-ek száma.');
}

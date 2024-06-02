    const bgDiv = document.getElementById('backgroundDiv');
    const originalBackground = 'url("first_no.jpg")';
    const temporaryBackground = 'url("second_yes.jpg")';

    bgDiv.addEventListener('click', () => {
        bgDiv.style.backgroundImage = temporaryBackground;
        setTimeout(() => {
            bgDiv.style.backgroundImage = originalBackground;
        }, 2000);
    });

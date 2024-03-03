const letter = document.querySelectorAll('#_letters #_letter');

letter.forEach((letter) =>{
    letter.addEventListener('mouseout', () => {
        letter.classList.toggle('active');
    });
});
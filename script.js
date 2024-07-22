// JavaScript to toggle visibility of card sections based on toggle switch state
const toggleSwitch = document.getElementById('toggle');
const menCards = document.getElementById('men-cards');
const womenCards = document.getElementById('women-cards');

toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        // If toggle is checked (Women selected), show Women cards, hide Men cards
        menCards.style.display = 'none';
        womenCards.style.display = 'block';
    } else {
        // If toggle is not checked (Men selected), show Men cards, hide Women cards
        menCards.style.display = 'block';
        womenCards.style.display = 'none';
    }
});

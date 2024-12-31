// JS to show card on hover and animate
const names = document.querySelectorAll('.name');
const card = document.getElementById('card');
const cardName = document.getElementById('card-name');
const cardDetails = document.getElementById('card-details');

names.forEach(name => {
    name.addEventListener('mouseenter', (e) => {
        const details = e.target.dataset.details;
        const nameText = e.target.textContent;
        
        // Set the card content
        cardName.textContent = nameText;
        cardDetails.textContent = details;
        
        // Show the card
        card.style.transform = 'translateX(-50%) scale(1)';
    });

    name.addEventListener('mouseleave', () => {
        // Hide the card
        card.style.transform = 'translateX(-50%) scale(0)';
    });
});

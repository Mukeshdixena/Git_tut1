// Ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Adding the sub-heading to the first div (header)
    const headerDiv = document.getElementById('header');
    const subHeading = document.createElement('h3');
    subHeading.textContent = 'Buy high quality organic fruits online';
    subHeading.style.fontStyle = 'italic';
    headerDiv.appendChild(subHeading);

    // Adding the paragraph with id before the unordered list in the second div
    const basketDiv = document.querySelector('div:nth-of-type(2)');
    const fruitsTotal = document.createElement('p');
    fruitsTotal.id = 'fruits-total';
    fruitsTotal.textContent = 'Total fruits: 4';
    basketDiv.insertBefore(fruitsTotal, basketDiv.querySelector('ul'));
});

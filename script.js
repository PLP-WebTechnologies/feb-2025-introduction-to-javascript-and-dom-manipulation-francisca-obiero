// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'The text has been changed dynamically!';
});

// Add or remove an element when a button is clicked
document.getElementById('add-element-btn').addEventListener('click', () => {
    const container = document.getElementById('dynamic-container');
    const newElement = document.createElement('p');
    newElement.textContent = 'A new element has been added!';
    container.appendChild(newElement);
});
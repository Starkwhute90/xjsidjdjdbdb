// Simulating poem data for now. Later, we will fetch this from Firebase.
const poems = [
    {
        title: "Poem 1",
        content: "This is the content of the first poem."
    },
    {
        title: "Poem 2",
        content: "This is the content of the second poem."
    }
];

// Function to display poems
function displayPoems() {
    const container = document.getElementById('poems-container');
    container.innerHTML = ''; // Clear the container first

    poems.forEach(poem => {
        const poemCard = document.createElement('div');
        poemCard.classList.add('poem-card');
        poemCard.innerHTML = `
            <h2>${poem.title}</h2>
            <p>${poem.content}</p>
        `;
        container.appendChild(poemCard);
    });
}

// Handle new poem submission
document.getElementById('new-poem-button').addEventListener('click', () => {
    const title = prompt("Enter poem title:");
    const content = prompt("Enter poem content:");
    if (title && content) {
        poems.push({ title, content });
        displayPoems();
    }
});

// Call displayPoems when the page loads
window.onload = displayPoems

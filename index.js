// index.js

// Function to add an event listener
function addingEventListener() {
    // Select the element to which you want to add the event listener
    const button = document.getElementById('button');
    
    // Add an event listener to the button
    button.addEventListener('click', function(event) {
        // Handle the click event here
        console.log('button clicked!');
    });
}

// Export the function if needed
module.exports = addingEventListener;

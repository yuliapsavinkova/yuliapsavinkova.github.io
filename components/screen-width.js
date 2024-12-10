function updateWidth() {
    // Get the width of the browser window
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // console.log('Width: ' + width + 'px')
    document.getElementById('screenWidth').innerHTML = width + ' x ' + height;
}

// Call the function to display the width when the page loads
updateWidth();

// Update width on window resize
window.onresize = updateWidth;
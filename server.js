const express = require('express');
const app = express();
const port = 2443; // Choose a port

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
const express = require('express');

const app = express();


app.use((req , res , next ) =>{
    const startTime = Date.now();

    // Log information about the incoming request
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  
    // Continue processing the request
    next();
  
    // Calculate and log the time taken for processing the request
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    console.log(`[${new Date().toISOString()}] Request processed in ${elapsedTime}ms`);

})


app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

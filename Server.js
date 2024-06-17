import app from "./src/App.js";

const port = 5000;

app.listen(port,() =>{
    console.log(`O servidor está no ar http://localhost:${port}`);
})
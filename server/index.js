const express = require("express"); 
const app = express(); 
app.use(express.json()); 
app.use(express.static(__dirname + "/../public/build"))

const ctrl = require("./controllers/messages_controller"); 
const port = 3001; 

app.post("/api/messages", ctrl.create)
app.get("/api/messages", ctrl.read)
app.put("/api/messages/:id", ctrl.update)
app.delete("/api/messages/:id", ctrl.delete)


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
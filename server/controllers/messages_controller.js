let messages = []; 
let id = 0; 

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    }, 
    read: (req, res) => {
        res.status(200).send(messages)
    }, 
    update: (req,res) => {
        const {text} = req.body
        const updateId = req.params.id 
        const index = messages.findIndex(elem => elem.id == updateId)
        let newInput = messages[index]
        messages[index] = {
            id: newInput.id, 
            text: text || newInput.text, 
            time: newInput.time
        }
        res.status(200).send(messages)
    }, 
    delete: (req, res) => {
        const idIndex = messages.findIndex(elem => {
            return elem.id == req.params.id
        })
        messages.splice(idIndex, 1)
        res.status(200).send(messages)
    }
}
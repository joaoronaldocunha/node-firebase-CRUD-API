import { updateDataUser } from "../firebase/db.js"

async function updateUser(req, res) {
    const id = req.params.id

    const { name, email, age } = req.body
    const userData = { name, email, age }

    const update = updateDataUser(id, userData)
    update.then(response => {
        res.send(response)
    })
}

export default updateUser
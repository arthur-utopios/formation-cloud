import express from 'express';
//import functions from services to execute in routes
import { runContainer, getContainers, getContainerInfo, killContainer } from './services/paas.service'

export const router = express.Router();


// POST /containers
// Body: {"docker-image-tag":"ubuntu:latest", "name": "mon-conteneur"}
// Reponse: {}
router.post('/containers/:id', async (req, res) => {
    const { image, name, port } = req.body
    const { id } = req.params 
    const userOptions = { image, name, port, id }
    
    //Wait for results of runContainer function
    const result = await runContainer(userOptions)

    //A adapter suivant exception fonction runContainer
    if (result.success) {
        res.json({success: result.success, data : result.data})
    } else {
        res.json({success : result.success, error: result.error})
    }
});

// DELETE /containers/{id} : kill the container
router.delete('/containers/:id', async (req, res) => {
    const result = await killContainer(req.params.id)

    if(result.success) {
        res.json({success: result.success, message : "Container was successfully deleted"})
    } else {
        res.json ({success : false, error : result.error})
    }
})

// GET /containers/{id}
router.get('/containers/:id', async (req, res) => {
    const containerInfo = await getContainerInfo(req.params.id)

    if (containerInfo.success) {
        res.json({success: containerInfo.success, containerInfo: containerInfo.data})
    } else {
        res.json({success: false, message : "Container info could not be retreived"})
    }

})

// GET /containers/
router.get('/containers', async (req, res) => {
    const containerList = await getContainers()

    if (containerList.length) {
        res.json({success: false, message: "No containers found"})
    } else {
        res.json({success: true, containers: containerList})
    }
})
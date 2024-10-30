import express from 'express';

export const router = express.Router();

// POST /containers
// Body: {"docker-image-tag":"ubuntu:latest", "name": "mon-conteneur"}
// Reponse: {}
router.post('/containers');

// DELETE /containers/{id} : kill the container
router.delete('/containers/{id}')

// GET /containers/{id}
router.get('/containers/{id}')

// GET /containers/
router.get('/containers')
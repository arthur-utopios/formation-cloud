import Docker from 'dockerode';

const docker = new Docker();

console.log(await docker.listImages());

docker.run('nginx:latest', [], process.stdout, {
    'ExposedPorts': {
        '80/tcp': {}
    },
}, (err, data, container) => {
    if (err) {
        return console.error(err, container);
    }
    console.log(data.StatusCode);
});
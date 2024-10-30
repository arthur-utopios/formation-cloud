import Docker from 'dockerode';

const docker = new Docker();

// récupérer xml

const options = {
  "image": "alpine/xml",
  "command": ['xq', "-h"],
}

const createContainer = async (options) => {
  const { image, command } = options
  docker.run(image, command, process.stdout, { HostConfig: { AutoRemove: true } }, function (err, data, container) {
    console.log(data.StatusCode);
    console.log("Voilà tu peux copier-coller process.stdout à la mano maintenant :)))")
  });
}
createContainer(options)
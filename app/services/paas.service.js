import { keysAreValid, validDockerInputImage } from "./validation.js";
import { InvalidDockerOptionsError } from '../exceptions/exceptions.js'
import Docker from 'dockerode';

export const runContainer = async (options) => {

    // need to validate object options
    
    const docker = new Docker();

    docker.run(options.image, [], undefined, {
        'ExposedPorts': {
            '80/tcp': {}
        },
    }, (err, data, container) => {
        if (err) {
            return console.error(err, container);
        }
        const { Id } = container.inspect();

        console.log(Id);
        // console.log(data.StatusCode);
    });
};

const deleteContainer = async () => { };

const getContainerInfos = async () => { };

const validateOptions = (options) => {

    // check if the object is valid
    const validKeys = ['image', 'name', 'port']
    if (keysAreValid(options, validKeys) === false) {
        throw new InvalidDockerOptionsError
    }

    validDockerInputImage(options.name)
};
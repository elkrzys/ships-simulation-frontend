import axios from 'axios';
import { endpoint, simulationStatus } from '../strings';

const Actions = {
    startSimulation: async () => {
        try {
            const response = await axios.post(endpoint)
            return { status: simulationStatus.success, data: response.data }
        } catch(error) {
            return { status: simulationStatus.error, data: error }
        }
    }
}

export default Actions;

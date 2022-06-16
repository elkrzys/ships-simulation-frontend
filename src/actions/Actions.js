import axios from 'axios';
import { endpoint, SimulationStatus } from '../strings';

const Actions = {
    startSimulation: async () => {
        try {
            const response = await axios.post(endpoint)
            return { status: SimulationStatus.success, data: response.data }
        } catch(error) {
            return { status: SimulationStatus.error, data: error }
        }
    }
}

export default Actions;

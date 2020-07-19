import { Network, NetworkData } from "../models/network";
import { activityEventBus, backUrl } from "../main";

interface ResBody {
    message: string;
    networks: NetworkData[];
}

const getJsonBody = async (response: Response) => {
    try {
        // Converts the response's body to JSON
        const jsonResBody = await response.json();

        return jsonResBody as ResBody;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const loadNetworkModels = async () => {
    let networks: Network[] = [];
    activityEventBus.display("Loading data from backend ...");

    try {
        const response = await fetch(`${backUrl}/modeling/networks`);
        // Error did not get a success status
        if (response.status != 200) {
            console.error(response.body);
            throw new Error("Could not get networks from backend");
        }

        const networksData = (await getJsonBody(response)).networks;

        networks = networksData.map(networkData => {
            return new Network(networkData);
        });
        activityEventBus.clear();

        return networks;
    } catch (error) {
        activityEventBus.display("Error while loading data")
        throw error;
    }
}

export default loadNetworkModels;
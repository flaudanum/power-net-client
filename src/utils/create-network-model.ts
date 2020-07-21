import { activityEventBus, backUrl } from "../main";

const createNetworkModel = async (jsonData: string) => {
  activityEventBus.display("Sending data to backend ...");

  try {
    const response = await fetch(`${backUrl}/modeling/network`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: jsonData
    });

    // Error did not get a success status
    if (response.status != 201) {
      throw new Error("Could create new networks in backend");
    }
    setTimeout(() => {
      activityEventBus.display("The network model was created successfully");
      activityEventBus.clear();
    }, 3000);
  } catch (error) {
    activityEventBus.display("Error while loading data");
    throw error;
  }
};

export default createNetworkModel;

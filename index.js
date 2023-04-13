// Imports the Alchemy SDK
const { Alchemy, Network } = require("alchemy-sdk");
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.API_KEY;

// Configures the Alchemy SDK
const config = {
    apiKey: apiKey, // Replace with your API key
    network: Network.ETH_SEPOLIA, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

const main = async () => {
    let owner  = "0x87ADc1c20CD33b6d28876d1b857D8B1cA84322E1";

    //Call the method
    let response = await alchemy.nft.getNftsForOwner(owner)

    //Logging the response to the console
    console.log(response)
};

main();

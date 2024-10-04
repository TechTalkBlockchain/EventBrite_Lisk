import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EventBriteModule = buildModule("EventBriteModule", (m) => {
    
    const nftAddress = "0xD7E89c64258A9bbe48d0104cFAdCEd1938800B20";
    const eventBrite = m.contract("EventBrite", [nftAddress]);

    return { eventBrite };
});

export default EventBriteModule;

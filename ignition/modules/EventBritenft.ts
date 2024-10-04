import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const EventBritenftModule = buildModule("EventBritenftModule", (m) => {

    const event = m.contract("EventBritenft");

    return { event };
});

export default EventBritenftModule;

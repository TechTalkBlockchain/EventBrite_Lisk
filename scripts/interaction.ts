import {ethers} from "hardhat"

async function interaction () {

    const eventBriteAddress = "0x3f24a648ee9BC3C9294EC4e3871C573f7978F4A0";

    const EventBrite = await ethers.getContractAt ("IeventBrite", eventBriteAddress);

   // pass all param for interaction sudo

   const _name = "The Box";
   const _description = "Tech Event";
   const _date = 1726354800;
   const _maxParticipants = 10;


   const tx = await EventBrite.createEvent(_name,_description,  _date, _maxParticipants);

   tx.wait();
   
   console.log (EventCounts)
    
}
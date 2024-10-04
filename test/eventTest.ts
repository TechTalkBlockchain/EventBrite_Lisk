import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("EventBrite", function () {
 
  async function deployEventBriteFixture() {

    // Contracts are deployed using the first signer/account by default

    const EventBrite = await hre.ethers.getContractFactory("EventBrite");
    const eventbrite = await EventBrite.deploy();

    return { eventbrite};
  }

  describe("Deployment", function () {
    it("Should set the right ", async function () {
      const { eventbrite } = await loadFixture(deployEventBriteFixture);
    });

    it("Should set the right owner", async function () {
      const { eventbrite} = await loadFixture(deployEventBriteFixture);

      expect(await eventbrite.owner());
    });

    it("Should receive and store the funds to eventbrite", async function () {
      const { eventbrite } = await loadFixture(
        deployEventBriteFixture
      );
    });

    it("Should fail if the  is not in the future", async function () {
      // We don't use the fixture here because we want a different deployment
    });
  });

});
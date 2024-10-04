// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IeventBrite {
    
    function createEvent(string memory _name, string memory _description, uint256 _date, uint256 _maxParticipants) external;
}
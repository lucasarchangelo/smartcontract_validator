// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Test1 is Ownable {

    constructor(address initialOwner)
        Ownable(initialOwner)
    {}

    uint256 storedValue;

    function store(uint256 value) external {
        storedValue = value;
    }

    function readStore1() external view returns(uint256) {
        return storedValue;
    }
}
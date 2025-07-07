// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoffeeTrack {
    struct CoffeeStage {
        uint index; 
        string stage;
        string name;
        string location;
        string date;
        string sustainability;
        string beanType;
        string process;
        string roasting;
        string details;
    }

    mapping(uint => CoffeeStage[]) public coffeeBatches;
    uint public batchCount = 0;

    event BatchCreated(uint batchId);

    function createBatch() public returns (uint) {
        batchCount++;
        emit BatchCreated(batchCount);
        return batchCount;
    }

    function addCoffeeStage(
        uint _batchId,
        string memory _stage,
        string memory _name,
        string memory _location,
        string memory _date,
        string memory _sustainability,
        string memory _beanType,
        string memory _process,
        string memory _roasting,
        string memory _details
    ) public {
        uint stageIndex = coffeeBatches[_batchId].length;

        CoffeeStage memory newStage = CoffeeStage(
            stageIndex, 
            _stage,
            _name,
            _location,
            _date,
            _sustainability,
            _beanType,
            _process,
            _roasting,
            _details
        );

        coffeeBatches[_batchId].push(newStage); 
    }

    function getBatchStages(uint _batchId) public view returns (CoffeeStage[] memory) {
        return coffeeBatches[_batchId];
    }
}
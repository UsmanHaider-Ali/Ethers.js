// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Demo {
    uint number = 10;
    string _value;

    function setNumber(uint _number) public {
        number = _number;
    }

    function getNumber() public view returns (uint) {
        return number;
    }

    function getNameValue() public view returns (string memory) {
        return _value;
    }

    function setNameValue(string memory value) public {
        _value = value;
    }
}

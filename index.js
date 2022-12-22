const ethers = require("ethers");
const demoJson = require("./build/contracts/Demo.json");

const ganacheUrl = process.env.GANACHE_URL;
const provider = new ethers.providers.JsonRpcProvider(ganacheUrl);

const ERC20_ABI = [
  "function setNumber(uint _number)",

  "function getNumber() public view returns (uint)",
];

// console.log(demoJson.networks[5777].address);

const address = process.env.ADDRESS;
const privateKey = process.env.PRIVATE_KEY;

// const demoContract = new ethers.Contract(demoJson.networks[5777].address, ERC20_ABI, provider);

// const getBalanceOfAccount = async () => {
//  const balance = await provider.getBalance(address);

//  console.log(ethers.utils.formatEther(balance));
// }

let wallet = new ethers.Wallet(privateKey, provider);

const deployContract = async () => {
  let factory = new ethers.ContractFactory(
    demoJson.abi,

    demoJson.bytecode,

    wallet
  );
  let contract = await factory.deploy();

  let contractWithSigner = contract.connect(wallet);

  console.log(contract.address);

  console.log(await contract.getNumber());

  let tx = await contractWithSigner.setNameValue("I like development.");

  console.log(tx);

  console.log(await contract.getNameValue());
};

deployContract();
console.log(provider.getSigner());

// const intractWithContract = async () => {

// await demoContract.setNumber(5);
//  const number = await demoContract.getNumber();

//  console.log(ethers.utils.formatEther(number));
// console.log(demoJson.networks.address);

// }
// intractWithContract()

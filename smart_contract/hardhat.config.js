//https://eth-goerli.g.alchemy.com/v2/250ZivqpHVRAR-y7Hyya6iNZwwxA0JMI


require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity: '0.8.0',
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/250ZivqpHVRAR-y7Hyya6iNZwwxA0JMI',
      accounts: ['4ec18773b938137d07c9a57ef7a07a5cb0c8e0520c39c71e3f303965446b545f']
    }
  } 
}
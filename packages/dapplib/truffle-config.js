require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note spike equip inflict drive flip twist'; 
let testAccounts = [
"0xcfefb0dec14d92429bfbf8609f194f7c447018557f43692d9086e2a3e65407a3",
"0x80303a84371c3c9bec14786f0d9607c4c37c524e56a56f5c615fd3c47de964d1",
"0xcc780066637affbd0f00f9e5f48bd6babdae6acf6d2de2753cb0a002b448bef6",
"0x0e597074aaca517cf64ecad9201fc5c42202a17b0b041618400129c2ca501626",
"0xf2ff577d565c98d4378328cfa4fda7a38e39937d088f4483f309264351060629",
"0x218728f68b516fac3a0edb680180e5a6c039f9f0035a0ca8245259a32e62b756",
"0x9f7cb575180ca845eedffd29edb86daaad3c24d033678cbe3d07152a3f6b6e91",
"0xcd52704d9b4c3136b9687bc97d368686111ffb841348afe36140b0b9f35237de",
"0xdd2c8b1b665b3f9d8798ea673824676939fbba40644190b7d3742dc13941d2d4",
"0xa96bdebfb724cfbd79bdd57e9031b371980a16472c4c981a9fb970a0b5f6b7a0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


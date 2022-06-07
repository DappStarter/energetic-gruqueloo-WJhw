require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million provide include process front slice'; 
let testAccounts = [
"0x0b2eece8474819baccdc796547d795e43b27817c81886f2cd29c12389fba3c9e",
"0xd313f5e4e5d4c710f397b2f69ad025376cd82cc916075bd1d22dec44a83d5415",
"0x5145d782b0d313af7c3de1059cceafc032cc931097be1e3341081ca828d3714e",
"0xbb02c5e61674a15e15cf74c2802c2776736e34e93a1adcd39ec3f780c2d2a798",
"0x6938b89a12de40f3e7fc802cf8b1a28e311ac80de0185058b80dbcedefeaecba",
"0x696349773d5edcd3ab7270715045bb9266b9a85c0944763a380b8df5d76664f3",
"0x6bd5d66b620d38d0247d57cb25f02442c3ef901512bbb31de67e73f5cdffbb7d",
"0xf77511fcde8a807968aa88993947bb07aedd9b0e5b5ba3fcd99cee88756937fc",
"0x12fc91d2d92f2fdb3c8a5fec78113d17fa9089d12b34f0f1028a75c6ac5377f0",
"0xd17a768a487ae93d522b5f04c5831fd5376282246c0906bd5deea04f66343492"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: "0.8.0",
    networks: {
        base: {
            url: "https://base.network/rpc", // آدرس RPC شبکه Base
            accounts: [0x${YOUR_PRIVATE_KEY}] // کلید خصوصی شما
        }
    }
};

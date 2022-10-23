const helloworld = artifacts.require("HelloWorld");
const helloworldPermanent = artifacts.require("HelloWorldPermanent");

module.exports = function (deployer){
    deployer.deploy(helloworld, "Hello World from migration file").then(async ()=>{
        let instance = await helloworld.deployed();
        return deployer.deploy(helloworldPermanent, instance.message());
    });
}
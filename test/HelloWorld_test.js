const helloworld = artifacts.require("HelloWorld");

contract("Hello World", accounts => {
    it("constructor should set message correctly", async ()=>{
        let instance = await helloworld.deployed();
        let message = await instance.message();
        assert.equal(message, "Hello World from migration file");
    })

    it("owner should be accounts[0]", async ()=>{
        let instance = await helloworld.deployed();
        let owner = await instance.owner();
        assert.equal(owner, accounts[0]);
    })
})
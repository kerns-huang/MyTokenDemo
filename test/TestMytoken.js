//引入智能合约
const MyToken=artifacts.require("MyToken");
const truffleAssert = require('truffle-assertions');
contract("MyToken",(accounts)=> {
    //账户的信息是从你的测试链上获取的，比如Ganache默认为生成10个测试账户
    var owner=accounts[0];
    var owner2=accounts[2];
    var reciver=accounts[1];

    //发放token 给其它人
    it("send token to others",async ()=>{
        // 所有的操作都是异步调用，所以需要只用await 关键字,不然返回给你的是promise 对象
        const instance= await MyToken.deployed();
        await instance.transfer(reciver,5)
        const balance=  await instance.balanceOf(reciver)
        assert.equal(balance,5,"reciver should have 5 token")
    }) 
    
    // //转让币拥有人。
    // it("transfer owner ship",async ()=>{
    //     const instance= await MyToken.deployed();
    //     console.log("this old owner is "+instance.owner)
    //     await instance.transferOwnership.call(owner2)
    //     console.log("this old owner is "+instance.owner)
    // })
})
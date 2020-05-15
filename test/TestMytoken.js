//引入智能合约
const MyToken=artifacts.require("MyToken");
const truffleAssert = require('truffle-assertions');
contract("MyToken",(accounts)=> {
    var sender=accounts[0];
    var reciver=accounts[1];
    //发放token 给其它人
    it("send token to reciver",()=>{
        return MyToken.deployed().then(function(instance) {
            //给account 1 发放 5个代码
            instance.transfer(reciver,5)
        })
    })

})
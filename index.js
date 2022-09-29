function saveAsObject(){
    var web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ropsten.infura.io/ws/v3/f75f263dde5540719b1a3fcebb821485'));

//创建合约实例
    var abi = [{
            "constant": true,
            "inputs": [
                {
                    "name": "identity",
                    "type": "address"
                }
            ],
            "name": "isIdentityExist",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getFirstBlockNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "identity",
                    "type": "address"
                },
                {
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "name": "value",
                    "type": "bytes"
                },
                {
                    "name": "updated",
                    "type": "int256"
                }
            ],
            "name": "setAttribute",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "identity",
                    "type": "address"
                }
            ],
            "name": "getLatestRelatedBlock",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "identity",
                    "type": "address"
                },
                {
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "name": "value",
                    "type": "bytes"
                },
                {
                    "name": "updated",
                    "type": "int256"
                }
            ],
            "name": "delegateSetAttribute",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getWeIdCount",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "identity",
                    "type": "address"
                },
                {
                    "name": "auth",
                    "type": "bytes"
                },
                {
                    "name": "created",
                    "type": "bytes"
                },
                {
                    "name": "updated",
                    "type": "int256"
                }
            ],
            "name": "createWeId",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "identity",
                    "type": "address"
                },
                {
                    "name": "auth",
                    "type": "bytes"
                },
                {
                    "name": "created",
                    "type": "bytes"
                },
                {
                    "name": "updated",
                    "type": "int256"
                }
            ],
            "name": "delegateCreateWeId",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getLatestBlockNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "currentBlockNum",
                    "type": "uint256"
                }
            ],
            "name": "getNextBlockNumByBlockNum",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "roleControllerAddress",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "identity",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "bytes"
                },
                {
                    "indexed": false,
                    "name": "previousBlock",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "updated",
                    "type": "int256"
                }
            ],
            "name": "WeIdAttributeChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "identity",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "previousBlock",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "created",
                    "type": "int256"
                }
            ],
            "name": "WeIdHistoryEvent",
            "type": "event"
        }];
    var metaTxContract = new web3.eth.Contract(abi,'0xC081739A451cC2d3E6cCE95f70e59e353A10A57F')

    metaTxContract.getPastEvents("WeIdAttributeChanged", { fromBlock: 0, toBlock: 'latest' })
	.then(function(events) {
        var json_str = JSON.stringify(events);
        document.querySelector('.hao').innerHTML=(json_str);
    });
}
$('.carousel').carousel({
    interval: 2000
  })
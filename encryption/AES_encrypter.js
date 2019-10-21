// n is: 27644437
// Alice's Secret Key is: 24639693
// Bob's Secret Key is: 11813127
// variable ga is: 24639680
// variable gb is: 11813130
let secret_key = 1959858 
let message = "This is a test message to see if the encrpytion is working."



// add additional spaces to end of message in order to make it divisible by 4
function padMessage (message) {
    while (message.length%4 != 0) {
        message += ""
        console.log(message.length)
    }
}

// convert to hex code
function stringToHex (message) {
    let result = []
    for (let i = 0; i<message.length; i++) {
        result.push(message.charCodeAt(i).toString(16)) 
    }
    return result
}

// split the hex code into bocks of 4 bits long
// splitHex takes in an array of hex code, and returns an array of arrays, each with 4 hex bits.

function splitHex (hexMessage) {
    let blocks = []
    let hexBlock = []
    let blockLength = 0
    for (let a = 0; a < hexMessage.length; a++) {
        if (blockLength < 4) {
            hexBlock.push(hexMessage[a])
            blockLength ++
        } else {
            blocks.push(hexBlock);
            blockLength = 0;
            hexBlock = [];
        }
    }
    





// let hexMessage = stringToHex(message)
// let hexMessageBlocks = splitHex(hexMessage)
padMessage(message)

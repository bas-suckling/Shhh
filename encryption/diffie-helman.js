let g = 13
//small prime number
let n = 27644437
console.log("n is: " + n)
//very large prime number - public key

let a = Math.floor(Math.random()*n)
console.log("Alice's Secret Key is: " + a)
//create a private key for Alice, a random number between 1 and n.

let b = Math.floor(Math.random()*n)
console.log("Bob's Secret Key is: " + b)
//create a private key for Bob, a random number between 1 and n.

let ga = (g^a)%n
console.log("variable ga is: " + ga)

let gb = (g^b)%n
console.log("variable gb is: " + gb)


let alices_gba = (ga^b)%n
let bobs_gba = (gb^a)%n

console.log("If " + alices_gba + " and " + bobs_gba + " are the same number, the math works!")

//use (g^a)^b%n as the initial key for the block encryption 
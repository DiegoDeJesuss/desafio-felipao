let userName = getFirstName("Felipe Amaral Silveira Canrtos")

console.log("Seja bem vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}



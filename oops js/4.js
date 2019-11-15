// Sol3 : 

function UserCreator (name,score){
     const newUser = Object.create(userFunctionStore)
    newUser.name = name
    newUser.score = score
    return newUser
}

const userFunctionStore={
    increment : function(){this.score++},
    login: function(){console.log("ur logg in")}
}

const user1 = new UserCreator("Tom", 4)
const user2 = new UserCreator("Plant", 5)

user1.increment()
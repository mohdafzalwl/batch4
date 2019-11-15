
function UserCreator (name,score){
    this.name = name
    this.score = score
}
UserCreator.prototype.increment =  function(){
    console.log("this outside", this)
    this.score++
//    function add1(){
//        console.log("this inside", this)
//        this.score++
//    }
   
//  const add1 = ()=> {
//      this.score++
//  }

//    add1()
}
UserCreator.prototype.login = function(){console.log("ur logg in")}

const user1 = new UserCreator("Tom", 4)
const user2 = new UserCreator("Plant", 5)

user1.increment()
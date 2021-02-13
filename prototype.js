function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
  
    return animal
  }

// function Animal (name, energy) {
//     let animal = Object.create(Animal.prototype)
//     animal.name = name
//     animal.energy = energy
  
//     return animal
//   }

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

const leo = Animal('Leo', 7)
leo.eat(5)

// Our call to leo.eat is going to fail. The reason for this is because the object returned from Animal isn't delegating to Animal.prototype so leo.eat will be undefined.
// To fix this, we can use Object.create or a combination of the this keyword with new.
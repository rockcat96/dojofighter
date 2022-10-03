class Fighter {

    constructor(name, health, strength, defense){
        this.name = name
        this.health = health
        this.strength = strength
        this.defense = defense
    }

    attack(defender){
        if(this.strength > defender.defense){
            const damage = this.strength - defender.defense;
            defender.health -= damage;
            console.log(`${this.name} attacked successfully!`)
            console.log(`${this.name} did ${damage} damage to ${defender.name}, who is left with ${defender.health} lyl health.`)
        }
        else if(this.strength < defender.defense){
            const damage = defender.defense - this.strength ;
            this.health -= damage;
            console.log(`${this.name} is getting overwhelmed by ${defender.name}!`) 
            console.log(`${defender.name} did ${damage} damage to ${this.name}, who is left with ${this.health} lyl health.`)
        }
        else{
            const damage = this.strength - defender.defense;
            defender.health -= damage;
            console.log(`${this.name}'s attack failed... ${this.name} did ${damage} damage to ${defender.name}, who is left with ${defender.health} lyl health.`)
        }
    }

}

const randomStrength1 = Math.floor(Math.random()*5) + 5;
const randomDefense1 = Math.floor(Math.random()*5) + 5;

const fighter1 = new Fighter("Ken", 10, randomStrength1, randomDefense1)
console.log(fighter1)

const randomStrength2 = Math.floor(Math.random()*5) + 5;
const randomDefense2 = Math.floor(Math.random()*5) + 5;

const fighter2 = new Fighter("Ryu", 10, randomStrength2, randomDefense2)
console.log(fighter2)



//toggles

let gameOn = true;
let kenRyu = true;

while(gameOn){

    if(kenRyu) {
        fighter1.attack(fighter2)
    }
    else{
        fighter2.attack(fighter1)
    }   
    kenRyu = !kenRyu
    
    if(fighter1.health <= 0) {
    
        console.log(`${fighter1.name} is dead. ${fighter2.name} is the winner!`)
        gameOn = false;
    
    }
    
    if(fighter2.health <= 0){
            console.log(`${fighter2.name} is dead. ${fighter1.name} is the winner!`)
            gameOn = false;
      
        }
        

}
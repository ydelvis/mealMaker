/* This project generates a randomized meal plan for for a client at a Restaurant
    It then gives the total cost involved.

    General goal is to practice concepts related to JavaScript Objects.

                                                        -By ydelvis

    #AmaliTechTraining   #Codecademy 
*/

let menu = {      // Menu Object
    _courses: { 
        appetizers: [],
        mains: [],
        desserts:[],  
    },
  
        get appetizers() {  
          return this.appetizers
        },
  
        set appetizers(appFood) {
          this.appetizers.push(appFood)
        }, 
        
        get mains(){   
          return this.mains;
        },
  
        set mains(appFood){
          this.mains.push(appFood)
        },
  
         get desserts(){  
          return this.desserts;
        },
  
        set desserts(appFood){
          this.desserts.push(appFood)
        } ,
  
    get courses(){
        return Object.entries(this._courses)
    },
  
    addDishToCourse(courseName, dishName, dishPrice){    // method to add dishes to menu
      const dish = {name: dishName, price: dishPrice}
       this._courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName){     // method to randomly select a dish from courses
      let dishes = this._courses[courseName];
      return dishes[Math.floor(Math.random() * dishes.length)]
    },
  
    generateRandomMeal(){     //  method to call random dish selection function 
      let appetizer = this.getRandomDishFromCourse('appetizers');
      let main = this.getRandomDishFromCourse('mains');
      let dessert = this.getRandomDishFromCourse('desserts');
  
  
      let totalCost = appetizer.price + main.price + dessert.price;  // total cost of selected meal
  
      return `Suggested Foods are: \n Appetizer: ${appetizer.name} \n Main Food: ${main.name} \n Dessert: ${dessert.name}\n --------------------- \n Total Cost: GHC ${totalCost}`
  
    } 
  };
  
  menu.addDishToCourse('appetizers','water',2);   // adding dishes to courses
  menu.addDishToCourse('appetizers','coke',5);
  menu.addDishToCourse('appetizers','Tea',10);
  
  menu.addDishToCourse('mains','Fufu',30);
  menu.addDishToCourse('mains','Jollof',25);
  menu.addDishToCourse('mains','Banku',20);
  
  menu.addDishToCourse('desserts','Orange Juice',10);
  menu.addDishToCourse('desserts','Malt',5);
  menu.addDishToCourse('desserts','Beer',12);
  
  let meal = menu.generateRandomMeal();   // obtaining a random meal
  console.log(meal);   // displaying the meal and the cost involved
  
export const makeSandwich = (proteinArg, cheeseArg, veggieArg, breadArg) => {
   return  {
        protein: proteinArg,
        cheese: cheeseArg,
        veggie: veggieArg,
        bread: breadArg,
    }
}



// . Define a function called "makeSandwich" that takes 4 parameters: protein, cheese, veggie, bread
// 2. makeSandwich should create a new sandwich object with the 4 parameters as its key/value pairs
// 3. makeSandwich will return our newly created sandwich
// 4. Call it a few times passing in different arguments to make different sandwiches!

console.log(makeSandwich("steak","chedder","onion","whole wheat"));
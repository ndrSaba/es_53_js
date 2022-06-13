function sum(...num) {
   let total = 0;
   for(const i of num){
    total += i;
   }
   return total;
}

console.log(sum(1, 2, 3, 4, 5));
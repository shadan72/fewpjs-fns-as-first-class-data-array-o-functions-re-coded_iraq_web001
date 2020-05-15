function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`)
  let dogCare= `Wake ${dogName} the ${dogBreed}`;
  return dogCare
}

function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`)
  let dogCare= `Leash ${dogName} the ${dogBreed}`;
  return dogCare
}

function walkToPark(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
 let dogCare=`Walk to the park with ${dogName} the ${dogBreed}`;
 return dogCare;
}
function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
 let dogCare=`Throw the frisbee for ${dogName} the ${dogBreed}`;
 return dogCare;
}
function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  let dogCare=`Walk home with ${dogName} the ${dogBreed}`;
  return dogCare;
}
function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  let dogCare=`Unleash ${dogName} the ${dogBreed}`;
  return dogCare;
}
let routine=[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
let result=""
function exerciseDog(dogName, dogBreed){
  for(let i=0;i<routine.length;i++){
    result=routine[i](dogName,dogBreed)
  }
  exerciseDog("Byron","poodle")
}
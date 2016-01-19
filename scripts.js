var triAngle = function(sideA, sideB, sideC) {
  if ( sideA === sideB && sideB === sideC ) {
    return "equilateral";
  } else if (sideA === sideB || sideB === sideC || sideA === sideC){
    return "isosceles";
  } else if ((sideA + sideB)< sideC || (sideA + sideC)<sideB || (sideB+sideC)<sideA){
    return "This is not a triangle.";
  } else {
    return "scalene";
  }
};

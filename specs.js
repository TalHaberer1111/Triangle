describe('triAngle', function() {
  it("is false for three sides where the sum of two are not greater than the third", function() {
    expect(triAngle(2, 1, 7)).to.equal("This is not a triangle.")
  });

  it("is true for three sides of equal length", function() {
    expect(triAngle(5, 5, 5)).to.equal("equilateral")
  });

  it("is true for two sides of equal length", function() {
    expect(triAngle(5, 5, 7)).to.equal("isosceles")
  });

  it("is true for three sides of unequal length", function() {
    expect(triAngle(3, 5, 7)).to.equal("scalene")
  });

});

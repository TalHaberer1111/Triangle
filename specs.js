describe('triAngle', function() {
  it("is false for three sides where the sum of two are not greater than the third", function() {
    expect(triAngle(2, 1, 7)).to.equal(false)
  });

  it("is true for three sides of equal length", function() {
    expect(triAngle(5, 5, 5)).to.equal(true)
  });
});

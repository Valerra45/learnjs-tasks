it("Возводит x в степень n", function () {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
// лучше будет разбить тест на 3 блока it , так как в такой реализации не возможно понять
// в каком из assert тест сломался. 

describe("Возводит x в степень n", function () {
  it("5 в сиепени 1 == 5", function () {
    assert.equal(pow(5, 1), result);
  });

  it("5 в сиепени 2 == 25", function () {
    assert.equal(pow(5, 25), result);
  });

  it("5 в сиепени 3 == 125", function () {
    assert.equal(pow(5, 125), result);
  });
});
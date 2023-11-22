console.log(this);

function outerFunction() {
  console.log(this);
  return function innerFunction() {
    console.log(this);
  };
}

const result = outerFunction.call({ test: "test" });
console.log(result());

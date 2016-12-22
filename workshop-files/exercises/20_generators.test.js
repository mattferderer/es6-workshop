test(`should yield objects with value and done properties`, () => {
  const odds = giveMeOneOddNumber()

  expect(odds.next().value).toBe(/* ENTER YOUR GUESS */)
  expect(odds.next().value).toBe(/* ENTER YOUR GUESS */)
  expect(odds.next().done).toBe(/* ENTER YOUR GUESS */)
  odds.next()
  expect(odds.next().value).toBe(/* ENTER YOUR GUESS */)
  expect(odds.next().done).toBe(/* ENTER YOUR GUESS */)

  function* giveMeOneOddNumber() {
    yield 1
    yield 3
    yield 5
    yield 7
    yield 9
  }
})

test(`can be iterated over`, () => {
  function* giveMeOneEvenNumber() {
    yield 2
    yield 4
    yield 6
    yield 8
  }

  let sum = 0

  // BEWARE, THIS IS BLOCKING/SYNCHRONOUS!
  // Generators are not async/await, those may be in ES2016
  for (let even of giveMeOneEvenNumber()) {
    sum = sum + even
  }

  expect(sum).toBe(/* ENTER YOUR GUESS */)
})

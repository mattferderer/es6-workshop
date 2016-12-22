test('has a set method', () => {
  // FINAL_START
  const myMap = new Map()
  myMap.set('name', 'Aaron')
  // FINAL_END
  // WORKSHOP_START
  // Create a new map called 'myMap'
  // add a new entry. Use 'name' as the key and 'Aaron' as the value
  // WORKSHOP_END

  expect(myMap.get('name')).toBe('Aaron')
})

test('can use objects as a key', () => {
  const user = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}

  // FINAL_START
  const myMap = new Map()
  myMap.set(user, value)
  // FINAL_END
  // WORKSHOP_START
  // Create a map called 'myMap'
  // add a new entry. Use user as the key, and value as the value
  // WORKSHOP_END

  expect(myMap.has(user)).toBe(true)
  expect(myMap.get(user)).toBe(value)

})

test(`doesn't coerce keys`, () => {
  // FINAL_START
  const myMap = new Map()
  myMap.set(1, 'Aaron')
  expect(myMap.get('1')).toBe(undefined)
  myMap.set('1', 'Aaron')
  expect(myMap.get('1')).toBe('Aaron')
  // FINAL_END
  // WORKSHOP_START
  const myMap = new Map()
  myMap.set(1, 'Aaron')
  expect(myMap.get('1')).toBe(/*ENTER YOUR GUESS HERE*/)
  myMap.set('1', 'Aaron')
  expect(myMap.get('1')).toBe(/*ENTER YOUR GUESS HERE*/)
  // WORKSHOP_END
})

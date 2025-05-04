export default `var UNUSED_CONST = 'unused'
const snake_case_var = 123

function badFunction(param: any): void {
  let x: number = 5 as any
  if (x == param) console.log('bad formatting')

  return undefined // unreachable code after return
}

// Missing return type
async function asyncFunc() {
  const promise = new Promise(resolve => {
    resolve('test')
  })

  await promise
}

// No-empty interface
interface EmptyInterface {}

// @ts-ignore
const test = 'ignoring typescript checks'
`

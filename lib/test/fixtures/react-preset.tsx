export default `// Missing React import
const component = () => {
  // Hook rules violations
  if (true) {
    const [state, setState] = useState()
  }
  useEffect(() => {
    setState(true)
  })

  // Accessibility violations
  return <div onClick={() => {}} role="button">
    <img src="test.jpg" />
  </div>
}

// Component naming violation
const hello = () => <div>Hello</div>

// Component declaration violation
function invalidComponent() {
  return <div>Invalid</div>
}

// Missing prop types
const Button = (props) => {
  return <button {...props} />
}

// State updates in promises
const AsyncComponent = () => {
  const [data, setData] = useState()
  
  Promise.resolve().then(() => {
    setData(true)
  })

  return null
}`

import { useEffect } from "react"

function App() {
  useEffect(() => {
    fetch("http://localhost:2000")
      .then(res => console.log(res))
      .catch(err => console.log(err))
  })
  return (
    <>
    </>
  )
}
export default App
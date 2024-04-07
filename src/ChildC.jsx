function ChildC({c,d}) {
  return (
    <>
   {/*<h1>{c}</h1>
    <h1>{d}</h1>*/}
    <button onClick={function(){d("Hello")}}>Click</button>
    <h1>{c}</h1>
    </>
  )
}
export default ChildC
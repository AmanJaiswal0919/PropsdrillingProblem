import ChildC from './ChildC'
 function ChildB({a,b}) {
  return (
    <>
    <ChildC c={a} d={b}/>
    </>
  )
}
export default ChildB
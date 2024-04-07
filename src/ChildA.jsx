import ChildB from './ChildB'
 function ChildA({name,age}) {
  return (
   <>
   <ChildB a={name} b={age}/>
   </>
  )
}
export default ChildA
const User = (props) =>{
  return(
    <>
    <h2>Hello {props.name}</h2>
    {props.children}
    </>
  )
}
export default User

type HelloProps =  {
name : string
}


const Hello = (props : HelloProps) => {
    const {name} = props;
  return (
    <h1>Hello {name}</h1>
  )
}

export default Hello
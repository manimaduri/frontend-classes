type StatusProps = {
    status : "success" | "error" | "loading";
}

const Status = (props: StatusProps) => {
    const { status } = props;
    if(status === "loading"){
        return <div>Loading...</div>
    }
    if(status === "error"){
        return <div>Error occurred!</div>
    }
  return (
    <div>Success!</div>
  )
}

export default Status
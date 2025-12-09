type UserCardProps = {
    name: string;
    age?: number;
}

const UserCard = (props : UserCardProps ) => {
    const { name, age } = props;
  return (
    <div>
        <h3>{name}</h3>
        {age && <p>Age: {age}</p>}
    </div>
  )
}

export default UserCard
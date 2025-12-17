import { useEffect, useState } from "react";
type User = {
  id: number;
  name: string;
  email: string;
};

const UserAPI = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(()=>{},[]) usefeect akes two parameters one is a function, next is a dependency array
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p> Loading Users..........</p>;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserAPI;

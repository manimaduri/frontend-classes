import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
type User = {
  id: number;
  name: string;
  email: string;
};

const UserAPI = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const context = useContext(ThemeContext);
if(!context){
     throw new Error("ThemeSwitcher must be used inside ThemeProvider");
}
  const {theme} = context

  // useEffect(()=>{},[]) usefeect akes two parameters one is a function, next is a dependency array
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  useEffect(()=>{
    console.log("Runs on every render");
  });

  useEffect(()=>{
    console.log("Runs only once");
  },[]);

  useEffect(()=>{
    console.log("users list changed", users)
  },[users,loading])

  if (loading) return <p> Loading Users..........</p>;
  return (
    <ul>
            <p>Current Theme : {theme}</p>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserAPI;

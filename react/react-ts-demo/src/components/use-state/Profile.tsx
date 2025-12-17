import { useState } from "react";

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const Profile = () => {
  const [user, setUser] = useState<User>({
    name: "John",
    age: 22,
    isAdmin: false,
  });

  const makeAdmin = () => {
    // setUser({
    //   name: user.name,
    //   age: user.age,
    //   isAdmin: true,
    // });

    setUser((prev) => ({
      ...prev,
      name: "Black",
    }));
  };

  return (
    <div>
      <h3>
        {user.name} {user.age}
      </h3>
      {user.isAdmin ? (
        <p>Admin access Granted</p>
      ) : (
        <button onClick={makeAdmin}>Make Admin</button>
      )}
    </div>
  );
};

export default Profile;

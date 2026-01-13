import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json: T) => {
        setData(json);
        setLoading(false);
      });
  }, [url]);
  return { data, loading };
}

//Usage example:
// type User = {
//     id : number;
//     name : string;
// }

// const {data, loading} = useFetch<User[]>(
//     "https://jsonplaceholder.typicode.com/users"
// )

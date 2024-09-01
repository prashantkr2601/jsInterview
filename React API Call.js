import React, { useState, useEffect } from "react";

const Datafetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";
    try {
      const res = await fetch(URL);
      if (!res?.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await res.json();
      //   console.log(data);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  return (
    <div>
      {loading ? (
        <p>Loading ...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {data &&
            data.map((item) => {
              return (
                <li key={item?.id}>
                  <h4>
                    <span>{item?.id}. </span>
                    {item?.title}
                  </h4>
                  <p>{item?.body}</p>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};
export default Datafetcher;

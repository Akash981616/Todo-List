/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

import axios from "axios";

const search = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [info, setinfo] = useState([]);
  const [input, setInput] = useState("");
  
 
  const fetch = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
console.log(data)
    setinfo(data);
  };
  useEffect(() => {
      fetch();
     
  }, [input])

  return (
    <div className="text-green-700">
      <div>
        <input
          type="text"
          placeholder="search here"
          value={input}
          name="search"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {info.filter(post => {
    if (input === '') {
      return post;
    } else if (post.username.toLowerCase().includes(input.toLowerCase())) {
      return post;
    }
    return post;
  }).map((post, index) => (
    <div className="box" key={index}>
      <p>{post.name}</p>
      <p>{post.username}</p>
    </div>
  ))
}
    </div>
  );
};
export default search;

import { useState } from "react";
import axios from "axios";
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchedData = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios.get("https://fakestoreapi.com/products?limit=5")
        .then((res) => res)
        .then((getData) => setData(getData.data));
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={fetchedData}>Fetch Data</button>
      {isLoading && <h2>Loading....</h2>}
      {!isLoading &&
        <ul>
          {data &&
            data.map((item) => {
              return <li key={item.id}>{item.title} </li>;
            })}
        </ul>
      }
    </div>
  );
};

export default Dashboard;

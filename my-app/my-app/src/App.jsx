import { useEffect, useState } from "react";
import "./App.css";
// import Card from "./Card1";
import Card1 from "./Card1";

function App() {
  const [input, setInput] = useState({
    productIMG: "",
    productPrice: "",
    productTitle: "",
  });
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      {/* <Card /> */}
      {item.map((e, i) => (
        <Card1 img={e.image} title={e.title} price={e.price} />
        // <div className="product">
        //   <img src={e.image} alt="img" width="200px" height="200px" />
        //   <h2>{e.price}</h2>
        //   <p>{e.title}</p>
        //   <p>{e.rating.rate}</p>
        // </div>
      ))}
    </>
  );
}

export default App;

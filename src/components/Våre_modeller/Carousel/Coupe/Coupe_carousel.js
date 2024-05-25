import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product";
import { Coupe_data, responsive } from "./Coupe_data";

export default function Coupe__carousel() {
  const product = Coupe_data.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      button={item.button}
    />
  ));

  return (
    <Carousel showDots={true} responsive={responsive}>
      {product}
    </Carousel>
  );
}

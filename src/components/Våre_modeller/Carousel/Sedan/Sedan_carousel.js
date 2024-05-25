import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product";
import { Sedan_Data, responsive } from "./Sedan_data";

export default function Sedan_carousel() {
  const product = Sedan_Data.map((item) => (
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

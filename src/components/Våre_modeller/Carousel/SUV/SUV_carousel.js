import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product";
import { SUV_Data, responsive } from "./SUV_data";

export default function SUV_carousel() {
  const product = SUV_Data.map((item) => (
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

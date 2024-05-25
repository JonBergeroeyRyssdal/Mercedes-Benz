import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../Product";
import { Storbillimousin_data, responsive } from "./Storbillimousin_data";

export default function Storbillimousin_carousel() {
  const product = Storbillimousin_data.map((item) => (
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

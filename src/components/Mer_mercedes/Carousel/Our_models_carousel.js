import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

export default function Mer_mercedes_carousel() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      info={item.info}
    />
  ));

  return (
    <Carousel showDots={true} responsive={responsive}>
      {product}
    </Carousel>
  );
}

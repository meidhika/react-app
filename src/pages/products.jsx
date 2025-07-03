import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Button";

const products = [
  {
    id: 1,
    name: "New Shoes",
    price: "Rp. 100.000",
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe.",
  },
  {
    id: 2,
    name: "Second Shoes",
    price: "Rp. 50.000",
    image: "/images/shoes-1.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, saepe.",
  },
  {
    id: 3,
    name: "Premium Shoes",
    price: "Rp. 1000.000",
    image: "/images/shoes-1.jpg",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
];

const email = localStorage.getItem("email");
const handleLogout = () => {
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  window.location.href = "/login";
};

const ProductsPage = () => {
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5 ">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;

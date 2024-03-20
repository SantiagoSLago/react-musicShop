import "../CartImage/CartImage.css"

const CartImage = () => {
  return (
    <div className="cartDiv">
      <img src="/img/carrito.png" alt="" height={60} />
      <i className="numberIcon">1</i>
    </div>
  );
};

export default CartImage;

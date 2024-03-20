import "../CartImage/CartImage.css"

const CartImage = ({purchasesNumber}) => {
  return (
    <div className="cartDiv">
      <img src="/img/carrito.png" alt="" height={60} />
      <i className="numberIcon">{purchasesNumber}</i>
    </div>
  );
};

export default CartImage;

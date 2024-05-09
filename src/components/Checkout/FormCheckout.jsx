import "../Checkout/checkout.css";

const FormCheckout = ({ dataForm, handleSubmit, handleChangeInput }) => {
  return (
    <div className="checkoutFormHolder">
      <form onSubmit={handleSubmit} className="checkoutForm">
        <div className="inputHolder">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={dataForm.name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="inputHolder">
          <label htmlFor="phone">Telefono:</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={dataForm.phone}
            onChange={handleChangeInput}
          />
        </div>
        <div className="inputHolder">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit">Enviar Orden</button>
      </form>
    </div>
  );
};

export default FormCheckout;

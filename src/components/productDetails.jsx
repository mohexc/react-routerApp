import React from "react";

const ProductDetails = ({ history, location, match }) => {
  const handleSave = () => {
    //? Navigate to /products
    //? pushMethod will => add new address in the browserHistory
    //? replaceMethod will replace the current address

    // history.push('/products')  //? back to Product list

    //? often used in login pages. at you don't want to take them back to the login page
    history.replace('/products')
  };


  return (
    <div>
      <h1 className="my-2">Product Details - { match.params.id } </h1>
      <button className="btn btn-outline-success my-2" onClick={ handleSave }>Save</button>
    </div>);
}

export default ProductDetails;
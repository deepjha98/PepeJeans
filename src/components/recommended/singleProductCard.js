import React from "react";
//////////////////////////
class SingleProduct extends React.Component {
  render() {
    return (
      <div className="product-card" key={this.props.product.id}>
        <div className="product-card__imgbox">
          <img
            src={this.props.product.productImage}
            alt="ProductImage"
            className="product-card--img"
          />
        </div>
        <div className="product-card__description">
          <div className="product__recommended--title">
            {this.props.product.productName}
          </div>
          <div className="product__recommended--info">
            {this.props.product.productDescription}
          </div>
          <div className="product__recommended--price">
            <span>Rs.</span>
            {this.props.product.price}
          </div>
        </div>
      </div>
    );
  }
}
///////////////////////////////////////////////
export default SingleProduct;

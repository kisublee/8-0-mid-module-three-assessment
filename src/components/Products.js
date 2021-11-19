import { Component } from "react";
import productData from "../data/productData";
import Cart from "./Cart";
// import ProductCard from "./ProductCard";


class Products extends Component {


    constructor() {
        super();
        this.state = {
            product: productData,
            list: [],
            total: "",
        };
      }
      

    //   handleItem = (each) => {
    //     this.setState({
    //       item: {each},
    //   })
    // }
     
      addToCart = (event) => {
        event.preventDefault()
        this.setState({
            list: [...this.state.list, event.target.value],
            total: Number(this.state.total) + Number(event.target.value.split(",")[1])
        })
      }


      render() {
        
            console.log(this.state)
          const displayProduct = this.state.product.map((each) => {
            return (
            <div className = "product-card" key = {each.id} >
                <h3>{each.name} </h3>
                <p>Price: ${each.price.toFixed(2)}</p>
                <button type = "submit" onClick ={this.addToCart} value ={[each.name, each.price]}>Add To Cart</button>
                <img onClick ={this.handleItem} className="product-image" src={each.img} alt={each.id} />
                <p>{each.description}</p>
            </div>
            )
        })

        
    
          return (
              <div className ="background">

                    <h2>My Garage Sale</h2>
                <div className ="products">
                    <div className = "product-container">
                    {displayProduct}
                    </div>
                    <Cart list = {this.state.list}
                          total = {this.state.total}
                    />
                </div>



              </div>
          )
      }

}

export default Products;
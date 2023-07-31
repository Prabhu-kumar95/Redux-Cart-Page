import { useSelector } from "react-redux";
import Product from "./Product";
const BasketProducts = () => {
    const {products,total,quantity}=useSelector((store)=>store.basket)
    return (
        <div>
            <section className="main-cart-section">
        <h1><b>Your Cart Page</b></h1>
                {quantity > 0 ? (
                    <>
                <div className="cart-items">
          <div className="cart-items-container">
            
                    {products.map((item, i) => 
                        <Product key={new Date().getTime + Math.random()}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            thumbnail={item.thumbnail}
                            quantity={item.quantity}
                      
                  
                        />
                  
                     )}
            
          </div>
                </div>
                <div className="card-total">
          <h3>
                        Cart Total : <span>{total }$</span>
          </h3>
 <h3 className="total-items">
          <b>Total quantity :</b>{" "}
          <span className="total-items-count">{quantity} </span>
        </h3>
         
        </div>
                </>
                ) : (
                    
                    <>
                    <h1 className=" text-center"> <b>Your Cart Is Empty !!!!</b></h1>
                    </>)}
             
      </section>
        </div>
    )
}
export default BasketProducts;
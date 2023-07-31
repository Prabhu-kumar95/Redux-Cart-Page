import { useDispatch } from "react-redux";
import { incrementquantity,decrementquantity,removeItem } from "../features/basketSlice";
const Product = ({ title, description, price, thumbnail, quantity }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="items-info">
        <div className="product-img">
          <img src={thumbnail} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
                    <i className="fas fa-minus minus" onClick={() => {
                        if (quantity === 1) { 
                            dispatch(removeItem({ title }));
                            return;
                    } dispatch(decrementquantity({title}))}}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={()=>{dispatch(incrementquantity({title}))}} ></i>
        </div>

        <div className="price">
          <h3>{price * quantity}$</h3>
        </div>

        <div className="remove-item">
          <i
            className="fas fa-trash-alt remove"
            onClick={()=>{dispatch(removeItem({title}))}}
          ></i>
        </div>
      </div>
        </div>
    )
}
export default Product;
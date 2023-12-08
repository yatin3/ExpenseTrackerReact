import React,{useState} from "react";
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  
  const [title,setTitle] = useState(props.title);
  const [amount,setAmount] = useState(props.amount)

 const clickHandler = () => {
  setTitle('updated')
  console.log("clicked!!!")
 }

 const amountChangeHandler = () => {
  setAmount(100)
  console.log("amount changed!!!")
 }


  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${amount}</div>
      <div className="expense-item__price">{props.location}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amountChangeHandler}>Update Amount</button>
    </div>
  );
}

export default ExpenseDetails;

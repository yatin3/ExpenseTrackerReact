import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
 const clickHandler = () => {
  console.log("clicked!!!")
 }

  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <div className="expense-item__price">{props.location}</div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseDetails;

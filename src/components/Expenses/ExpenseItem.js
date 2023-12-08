import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';

const  ExpenseItem = (props) => {

    // return (
    //   <div className='expense-item'>
    //     <ExpenseDate date={props.date}/>
    //      <div className='expense-item__description'>
    //         <h2>{props.title}</h2>
    //      </div>
    //      <div className='expense-item__price'>
    //        ${props.amount}
    //      </div>

    //   </div>
    // );    

    const deleteHandler = (event) => {
      console.log(event)
      console.log(event.target.parentNode.remove())
      //document.removeElement(event.target)
     }    

    return (
        <div className='expense-item'>
          <ExpenseDate date={props.date}/>
          <ExpenseDetails  amount={props.amount} title={props.title} location={props.location}/>
          <button onClick={deleteHandler} id={props.id}>Delete Expense</button>
        </div>
      );
  
  }
  

export default ExpenseItem;

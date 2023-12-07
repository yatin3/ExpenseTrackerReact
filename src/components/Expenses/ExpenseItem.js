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
    return (
        <div className='expense-item'>
          <ExpenseDate date={props.date}/>
          <ExpenseDetails amount={props.amount} title={props.title} location={props.location}/>
  
        </div>
      );
  
  }
  

export default ExpenseItem;

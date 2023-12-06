import ExpenseItem from "./components/ExpenseItem";

function App() {
  const Expenses = [
    { id: "e1", title: "furniture", amount: 20, date: new Date(2023, 3, 21),location:"delhi" },
    { id: "e2", title: "accessory", amount: 30, date: new Date(2023, 3, 22), location:"mumbai" },
    { id: "e3", title: "grocery", amount: 40, date: new Date(2023, 3, 23), location:"calcutta" },
    { id: "e4", title: "chocolatey", amount: 60, date: new Date(2023, 3, 24), location:"punjab" },
  ];
//   return (
//     <div>
//       <h2>let's get started</h2>
//       <ExpenseItem
//         title={Expenses[0].title}
//         amount={Expenses[0].amount}
//         date={Expenses[0].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={Expenses[1].title}
//         amount={Expenses[1].amount}
//         date={Expenses[1].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={Expenses[2].title}
//         amount={Expenses[2].amount}
//         date={Expenses[2].date}
//       ></ExpenseItem>
//       <ExpenseItem
//         title={Expenses[3].title}
//         amount={Expenses[3].amount}
//         date={Expenses[3].date}
//       ></ExpenseItem>
//     </div>
//   );
// }


return (
  <div>
    <h2>Let's get started</h2>
    {Expenses.map((element) => (
      <ExpenseItem
        key={element.id}  // Don't forget to add a unique key prop when rendering a list of components
        title={element.title}
        amount={element.amount}
        date={element.date}
        location={element.location}
      />
    ))}
  </div>
);

}

export default App;

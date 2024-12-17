import logo from './logo.svg';
import './App.css';
import { useForeePay } from 'react-foree-pay-checkout';

function App() {

  const { executeForeePay } = useForeePay();

  const myCallbackFunc = (responseJsonObject) => {
    alert(JSON.stringify(responseJsonObject))
  }

  const generateOrderNumber = () => {
    const timestamp = new Date().getTime(); // Current timestamp
    const orderNumber = `ORD${timestamp}`;
    return orderNumber;
  };

  const handleCheckout = () => {
    // const transactionDetails = {
    //   key: '6e65077d-ab5f-410d-94a7-44cfaa468684',
    //   amount: 1000,
    //   create_bill: true,
    //   reference_number: 'ORD-110212',
    //   callback: myCallbackFunc,
    //   callback_url: 'http://127.0.0.1:8000/foreepay/',
    //   customer_email_address: 'shoaibshakir2008@gmail.com',
    //   customer_phone_number: '03472447462',
    //   consumer_name: 'Shoaib Ahmed',
    // //   payment_method: '',
    // //   bill_details_id: 'adfadfd',
    // };

    const transactionDetails = {
      'key': '6e65077d-ab5f-410d-94a7-44cfaa468684',
      'amount': 1000,
      'is_generated': 0,
      'reference_number': generateOrderNumber(),
      'callback': myCallbackFunc,
      'customer_email_address': 'shoaib@gmail.com',
      'customer_phone_number': '03472447462',
      'consumer_name': 'Shoaib Ahmed',
      //'callback_url': '' /Call back url/
    }

    console.log('transactionDetails' , transactionDetails);
    
    executeForeePay(transactionDetails);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click below button to checkout <br />
          <button onClick={handleCheckout}>Checkout with Foree Pay</button>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

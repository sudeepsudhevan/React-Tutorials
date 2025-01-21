import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  // const balance = useSelector((store) => store.account.balance);
  // console.log(balance);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance, 
  };
}

// legacy way to connect to the store
export default connect(mapStateToProps)(BalanceDisplay); // BalanceDisplay;

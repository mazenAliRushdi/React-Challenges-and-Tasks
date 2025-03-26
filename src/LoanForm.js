import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";

export default function LoanForm() {
  const [ShowModal, setShowModal] = useState(false)
  const [loanInputs, setLoanInputs] = useState({
      name: '',
      phoneNumber: '',
      age: '',
      isEmployee: false,
      salaryRange: '',
  })

  let btnDisabled = loanInputs.name == '' || loanInputs.phoneNumber == '' || loanInputs.age == '';
  let handleMsg = null;

  if (loanInputs.phoneNumber.length <= 9 || loanInputs.phoneNumber.length >=12) {
    handleMsg = "The phone number you entered is  invalid.";
  }

  if (parseInt(loanInputs.age < 18) || parseInt(loanInputs.age > 100)) {
    handleMsg = "The Age you entered is invalid."
  }
 



  function handleClick (e) {
    setShowModal(true);
    e.preventDefault()
  }

  function handleDiv () {
    if (ShowModal) setShowModal(false);
  }

  return (
    <div
      className="flex"
      style={{ flexDirection: "column"}}
      onClick={handleDiv}
    >
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr></hr>

        <label>Name:</label>
        <input value={loanInputs.name} onChange={(e) => {
            setLoanInputs({...loanInputs, name: e.target.value})
        }}/>

        <label>Phone Number:</label>
        <input value={loanInputs.phoneNumber} onChange={(e) => {
            setLoanInputs({...loanInputs, phoneNumber: e.target.value})
        }}/>

        <label>Age:</label>
        <input value={loanInputs.age} onChange={(e) => {
            setLoanInputs({...loanInputs, age: e.target.value})
        }}/>


        <label style={{ marginTop: "30px" }}>Are you an employee?</label>
        <input type="ceckbox" checked={loanInputs.isEmployee} onChange={(e) => {
            setLoanInputs({...loanInputs, isEmployee: e.target.checked})
        }}/>

        <label>Salary:</label>
        <select value={loanInputs.salaryRange} onChange={(e) => {
            setLoanInputs({...loanInputs, salaryRange: e.target.value})
        }}>
          <option>less than 500$</option>
          <option>between 500$ and 2000</option>
          <option>above 2000</option>
        </select>

        <button id="submit-loan-btn" className={btnDisabled ? "disabled" : ""} disabled={btnDisabled} onClick={handleClick}>
          Submit
        </button>
      </form>

      <Modal isVisible={ShowModal} errorMsg={handleMsg}/>
    </div>
  );
}
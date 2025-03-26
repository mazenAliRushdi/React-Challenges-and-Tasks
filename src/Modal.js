import "./FormStyles.css";

export default function ShowModal({isVisible, errorMsg=null}) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          <h1 style={{color: errorMsg == null ? "green" : "red"}}>
            {errorMsg == null ? "Form submitted successfully." : errorMsg}
          </h1>
        </div>
      </div>
    )
  } 
}
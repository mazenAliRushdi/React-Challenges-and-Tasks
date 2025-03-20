import "./TagButtonStyle.css";
export default function TagButton({name, children}) {
  return <button className="tagButton">
    {name}
    {children}
  </button>;
}

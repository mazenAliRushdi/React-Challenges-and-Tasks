export default function Post({title, content, name}) {
  return (
    <div
      style={{
        padding: "10px",
        border: "solid teal 5px",
        background: "white",
        margin: "25px",
      }}
    >
      <h2>{title}</h2>
      <h2>{name}</h2>
      <hr />
      <p>{content}</p>
    </div>
  );
}

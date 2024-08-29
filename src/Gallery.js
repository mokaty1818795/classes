export default function Gallery(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Gallery content</p>
      <img className="avatar" src="/logo192.png" alt="avatar" />
    </div>
  );
}

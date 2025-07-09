export default function AutoScroll(props) {
  const imagenes = [...props.children, ...props.children];
  return (
    <div>
      <div>{imagenes}</div>
    </div>
  );
}

import style from './Destello.module.css';

export default function Destello(props) {
    const { cordX, cordY } = props;
  return (
    <div className={style.destello} style={{ left: cordX ?? 0, top: cordY ?? 0 }}>
    </div>
  );
}
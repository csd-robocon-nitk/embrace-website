import s from "./footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={s.content}>
        <nav>
          <div className={s.left}>
            <h4>Copyrights Reserved.</h4>
          </div>
        </nav>
      </div>
    </footer>
  );
}

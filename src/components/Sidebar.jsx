import {PencilLine} from 'phosphor-react'
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt=""
      />

      <div className={styles.profiles}>
        <img className={styles.avatar} src="https://github.com/TeodoroWillian.png" />
        <strong>Willian Teodoro</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
            <PencilLine size={20}/>
            Editar seu Perfil</a>
      </footer>
    </aside>
  );
}

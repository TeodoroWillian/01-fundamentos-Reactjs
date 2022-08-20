import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";


import styles from "./App.module.css";

import "./global.css";


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Willian Teodoro"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus amet voluptas sequi porro?"
          />
          <Post author="Cabrito Tevez" content="Um novo content" />
        </main>
      </div>
    </div>
  );
}

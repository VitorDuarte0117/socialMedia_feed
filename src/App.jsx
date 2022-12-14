import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

function App() {
    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post author="Vitor" content="Conteudo" />
                    <Post
                        author="Lallo"
                        content="   Lorem ipsum dolor, sit amet consectetur adipisicing "
                    />
                </main>
            </div>
        </>
    );
}

export default App;

import React from "react";
import { useRefreshToken } from "./hooks/useRefreshToken";
import styles from "./styles/App.module.css";

function App() {
    const loading = useRefreshToken();

    if (loading) {
        return <>Загрузка...</>;
    }

    return (
        <div className={styles.App}>
            <div>
                <h3>What to learn</h3>
                <div>
                    <input />
                    <button>+</button>
                </div>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} />{" "}
                        <span>HTML&CSS</span>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} /> <span>JS</span>
                    </li>
                    <li>
                        <input type="checkbox" checked={false} />{" "}
                        <span>React</span>
                    </li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}

export default App;

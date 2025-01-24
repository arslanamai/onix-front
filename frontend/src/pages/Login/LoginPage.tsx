import { useState } from "react";
import styles from "./LoginPage.module.scss";
import { api } from "../../api/api";
import { Link } from "react-router-dom";

export function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        api.post("/website")
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <Link className= {styles.Link} to="/">
                <p>✕</p>
                </Link>
                <h2>Sign in to Onix</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="EMAIL"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="PASSWORD"
                            required
                        />
                    </div>
                    <button type="submit" className={styles.loginBtn}>Войти</button>
                </form>
            </div>
        </div>
    );
}
import { BlockContext } from "../../components/BlockContext/BlockContext";
import { Header } from "../../components/Headers/Header";
import styles from "./WebSitePage.module.scss";

export function WebSitePage(){
    return(
        <div className={styles.page}>
            <Header/>
            <BlockContext/>
        </div>
    );
}
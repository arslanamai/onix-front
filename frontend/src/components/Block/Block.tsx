import React from "react";
import { Link } from "react-router-dom";
import styles from "./Block.module.scss";
import EditIcon from "../../assets/editSvg.svg";

// Тип пропсов компонента
interface BlockProps {
  id: string;
  code: string;
  index: number;
}

export const Block: React.FC<BlockProps> = ({ id, code, index }) => {
  return (
    <div className={styles.blockContent}>
      <div className={styles.blockIndex}>
        {index}
      </div>
      <Link to={`/website/block/${id}`} className={styles.editButton}>
        <img src={EditIcon} className={styles.editIcon} />
      </Link>
      <div
        className={styles.blockCode}
        dangerouslySetInnerHTML={{ __html: code }}
      />
    </div>
  );
};

import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/ThamirisAdriano.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Thamiris Adriano</strong>
              <time title="11 de maio às 11:13" dateTime="2024-02-09 08:13:20">
                Cerca de 1h atras
              </time>
            </div>
            <button title="Deletar comentário">
                <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Parabéns!</p>
        </div>
        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}

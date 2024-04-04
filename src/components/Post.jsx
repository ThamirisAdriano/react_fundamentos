import { Comment } from "./Comment";
import styles from "./Post.module.css";


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/ThamirisAdriano.png"
          />
          <div className={styles.authorInfo}>
            <strong>Thamiris Adriano</strong>
            <span>Coordenadora Pós Garduação</span>
          </div>
        </div>

        <time title="11 de maio às 11:13" dateTime="2024-02-09 08:13:20">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera</p>
        <p>Acabei de subir mais um repositório no github</p>
        <p>
          {" "}
          <a href="">Para acessar só clicar nesse link</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
      <Comment />
      <Comment />
      <Comment />

      </div>
    </article>
  );
}

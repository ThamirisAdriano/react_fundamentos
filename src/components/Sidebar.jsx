
import {PencilLine} from 'phosphor-react'
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
            className={styles.cover}
             src="https://media.istockphoto.com/id/1393142437/pt/foto/aerial-view-of-porto-de-galinhas-beaches-pernambuco-brazil-natural-pools-fantastic-vacation.jpg?s=1024x1024&w=is&k=20&c=sdxTCXg8Dm7LeDYVM7f1eg6FCTjzzfUgBZEYuJtpY0c=" />
            <div className={styles.profile}>

            <img className={styles.avatar} src="https://github.com/ThamirisAdriano.png"/>
            
            <strong>Thamiris Adriano</strong>
            <span>Coordenadora FIAP</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
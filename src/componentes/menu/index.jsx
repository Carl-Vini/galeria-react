import home from "../../assets/icones/home-ativo.png";
import curtidas from "../../assets/icones/mais-curtidas-inativo.png";
import vistas from "../../assets/icones/mais-vistas-inativo.png";
import novas from "../../assets/icones/novas-inativo.png";
import surpreenda from "../../assets/icones/surpreenda-me-inativo.png";
import styles from "./menu.module.scss"

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="icone tela inicial" />
                    <a href="/ ">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={curtidas} alt="icone mais curtidas" />
                    <a href="/ ">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={vistas} alt="icone mais vistas" />
                    <a href="/ ">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt="icone novas" />
                    <a href="/ ">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreenda} alt="icone surpreenda-me" />
                    <a href="/ ">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}
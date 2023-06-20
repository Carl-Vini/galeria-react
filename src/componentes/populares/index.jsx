import populares from "./fotos-populares.json"
import styles from "./populares.module.scss"

export default function Populares() {
    return(
        <aside className={styles.populares}> 
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {populares.map((foto) => {
                    return(
                        <li key={foto.id}>
                            <img src={foto.path} alt={foto.alt} />
                        </li>
                    );
                })}
            </ul>
        
        </aside>
    )
}

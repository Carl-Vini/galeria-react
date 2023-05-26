import Banner from "../../componentes/banner";
import Cabecalho from "../../componentes/cabecalho";
import Galeria from "../../componentes/galeria";
import Menu from "../../componentes/menu";
import Populares from "../../componentes/populares";
import Rodape from "../../componentes/rodape";
import styles from './paginaInicial.module.scss';


export default function PaginaInicial() {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>

                    < Menu />
                    <div className={styles.principal__imagem}>
                        <Banner />
                    </div>

                </section>
                <div className={styles.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>

    )
}
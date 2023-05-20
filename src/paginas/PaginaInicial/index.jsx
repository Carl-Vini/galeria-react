import Banner from "../../componentes/banner";
import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";

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
            </main>
            

        </>

    )
}
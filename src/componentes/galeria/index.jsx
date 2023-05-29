import Tags from "../tags";
import styles from './galeria.module.scss'
import fotos from './fotos.json'


import Cards from "./cards";
import { useState } from "react";

export default function Galeria() {

    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map((valor) => valor.tag))];

    const filtrarFotos = (tag) => {
            const novasFotos = fotos.filter((foto) => {
                return foto.tag === tag
            });
            setItens(novasFotos)
    }

    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
            <Cards item={itens} styles={styles} />
        </section>
    )
}
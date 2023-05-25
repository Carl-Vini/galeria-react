import facebook from './facebook.svg'
import logo from "./logo.png"
import instagram from "./instagram.svg"
import twitter from "./twitter.svg"
import styles from "./estilosRodape.module.scss"

export default function Rodape () {
    return(
        <footer className={styles.rodape}>
            <div>
                <img src={logo} alt='logo do site' width={160}/>
            </div>
            <a href='https://github.com/Carl-Vini/' target="_blank"
          rel="noreferrer"><h1>Desenvolvido por Carlos Vinícius Bezerra Sampaio</h1></a>
            <div>
                <a href="https://www.linkedin.com/in/carlosviniciusbezerrasampaio/"  target="_blank"
          rel="noreferrer">
                    <img src={facebook} alt="link para facebook" />
                </a>
                <a href="https://www.linkedin.com/in/carlosviniciusbezerrasampaio/"  target="_blank"
          rel="noreferrer">
                    <img src={instagram} alt="link para facebook" />
                </a>
                <a href="https://www.linkedin.com/in/carlosviniciusbezerrasampaio/"  target="_blank"
          rel="noreferrer">
                    <img src={twitter} alt="link para facebook" />
                </a>
            </div>

        </footer>
    )
}
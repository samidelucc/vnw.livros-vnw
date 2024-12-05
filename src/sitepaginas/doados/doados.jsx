import S from "./doados.module.scss"
import livroEx from "../../assets/livroex.png"

export default function Doados(){
    return(
        <section className={S.boxDoados}>
            <h2>Livros Doados</h2>
            <section className={S.boxBooks}>
                <article>
                    <img src={livroEx} alt="imagem do livro o protagonista" />
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                <article>
                    <img src={livroEx} alt="imagem do livro o protagonista" />
                    <h3>O Protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
            </section>
        </section>
    )
}
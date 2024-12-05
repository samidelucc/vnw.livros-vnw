import S from "./inicio.module.scss"
import porqueDevoDoar1 from "../../assets/porquedevodoar1.png"
import porqueDevoDoar2 from "../../assets/porquedevodoar2.png"
import porqueDevoDoar3 from "../../assets/porquedevodoar3.png"
import porqueDevoDoar4 from "../../assets/porquedevodoar4.png"


export default function Inicio(){
    return(
        <main>
            <section className={S.post}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={S.devoDoar}>
                <div>
                    <h2>Por que devo doar?</h2>
                </div>
                <section className={S.boxCard}>
                    <article>
                        <img src={porqueDevoDoar1} alt="" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </article>
                    <article>
                        <img src={porqueDevoDoar2} alt="" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </article>
                    <article>
                        <img src={porqueDevoDoar3} alt="" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </article>
                    <article>
                        <img src={porqueDevoDoar4} alt="" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </article>
                </section>
            </section>
        </main>
    )
}
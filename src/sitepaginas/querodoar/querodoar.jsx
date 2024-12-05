import S from "./querodoar.module.scss"
import infolivro from "../../assets/infodoslivros.png"


export default function QueroDoar(){
    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form action="">
                    <div>
                        <img src={infolivro} alt="" />
                        <h3>Informações do Livro</h3>
                    </div>
                    <input type="text" placeholder="Titulo" />
                    <input type="text" placeholder="Categoria" />
                    <input type="text" placeholder="Autor" />
                    <input type="text" placeholder="Link da Imagem" />
                    <input className={S.doar} type="submit" value="Doar" />
                </form>
            </section>
        </section>
    )
}
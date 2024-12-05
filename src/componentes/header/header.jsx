import livroicon from "../../assets/livroicon.png"
import lupa from "../../assets/lupa.png"
import { BrowserRouter, Routes, Route,Link } from "react-router-dom"
import Inicio from "../../sitepaginas/inicio/inicio"
import Doados from "../../sitepaginas/doados/doados"
import QueroDoar from "../../sitepaginas/querodoar/querodoar"
import S from "./header.module.scss"

export default function header(){
    return(
        <BrowserRouter>
        <header>
            <section className={S.boxLogo}>
                <img src={livroicon} alt="Livro icon" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={S.boxMenu}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/doados">Livros Doados</Link></li>
                    <li><Link to="/queroDoar">Quero Doar</Link></li>
                </ul>
            </nav>
            <div className={S.boxInput}>
                <input type="text" placeholder="O que você procura?" />
                <img src={lupa} alt="lupa" />
            </div>
        </header>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/doados" element={<Doados/>}/>
            <Route path="/queroDoar" element={<QueroDoar/>}/>
        </Routes>
        </BrowserRouter>
    )
}
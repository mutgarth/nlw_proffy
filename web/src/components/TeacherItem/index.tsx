import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/9639905?s=460&u=cb33f8b36a62f60ba01ae1f1023da9f888e93a99&v=4" alt="Lucas Meneses"/>
            <div>
                <strong>Lucas Meneses</strong>
                <span>Física</span>
            </div>
        </header>
        
        <p>
            Lari lori lura lara
            <br/><br/>

            Lara Lura liura Aara
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$10,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato.
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;
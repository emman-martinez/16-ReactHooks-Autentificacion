import React, { Component } from 'react';
import './Nosotros.css';

class Nosotros extends Component {
    state = {}
    render() {
        return(
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam hic, tempora amet totam nostrum aliquam consectetur veniam at eum tenetur quaerat ratione cumque facere deserunt ipsa sed cupiditate sint.
                    Pariatur veritatis et voluptate dolore, autem quibusdam fugiat sequi nam, voluptatem nostrum qui provident excepturi, officia debitis? Velit incidunt vitae impedit doloremque inventore labore, voluptas sit commodi nulla quam dolorum!
                    Dolore expedita vitae odit et eum harum nisi libero sequi possimus maiores, consectetur, iusto quo fuga nostrum iste modi corrupti? Maiores, quo pariatur! Quidem harum explicabo eveniet cupiditate excepturi repellat.
                    Rerum omnis distinctio aspernatur, nesciunt recusandae assumenda eius expedita autem ut deleniti, quasi quaerat tempora hic error dicta, impedit voluptas deserunt repellendus sed molestias saepe iusto numquam ea ipsum. Mollitia!
                    Dolorum, earum laboriosam soluta illo ipsa ex fugiat cum quaerat libero officia eveniet sunt similique quam neque perspiciatis ad perferendis inventore accusantium? Enim odit perspiciatis eos neque impedit error. Quae.</p>
                </div>
            </div>
        )
    }
}

export default Nosotros;
import React, { Fragment, Component } from "react";


class Roads extends Component {
    rutas = ['El tigure', 'Anaco', 'Barcelona', 'PLC', 'Caracas', 'Maracay', 'Valencia'];
    ruta = 'Puerto Ordaz';

    render() {
        return (
            <Fragment>
                <h1>Salidas hacia el centro del pais</h1>
                <ul>
                    {this.rutas.map(ruta => (
                        <li>{ruta}-</li>

                    ))}
                </ul>

            </Fragment>

        )

    }
}


export default Roads;



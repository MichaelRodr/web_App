import React, { Fragment, Component } from 'react'


class Vehiculos extends Component {
    vehiculos = ['Autobus', 'Sedan', 'Camioneta'];
    vehiculo = 'Camion';
    render() {
        return (
            <Fragment>

                <h1>Vehiculos disponibles</h1>
                <ul>
                    {
                        this.vehiculos.map(vehiculo => (
                            <li>{vehiculo}-</li>
                        )
                        )}
                </ul>
            </Fragment>
        )
    }
}

export default Vehiculos;

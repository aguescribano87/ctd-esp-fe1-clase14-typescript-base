import { useState } from "react";
import ListadoMensajes from "./components/ListadoMensajes";
import VistaMensaje from "./components/VistaMensaje";
import { Mensajes, mensajes } from "./data/mensajes";

import "./styles.css";

export default function App() {
    const [mensaje, setMensaje] = useState<Mensajes>();

    const seleccionarMensaje = (id: number) =>
        setMensaje(mensajes.find((m) => m.id === id));

    return (
        <div className="App">
            <h1>Bandeja de Entrada</h1>
            <div id="bandejaDeEntrada">
                <ListadoMensajes
                    mensajes={mensajes}
                    seleccionarMensaje={seleccionarMensaje}
                />
                {mensaje && <VistaMensaje mensaje={mensaje} />}
            </div>
        </div>
    );
}

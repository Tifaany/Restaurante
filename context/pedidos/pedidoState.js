import React, {useReducer} from "react";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";
import Menu from "../../Screen/Menu";

const PedidoState = props =>{
    // Crear estado inicial
    const inicialState ={
        Pedido: []
    }
    //Definir useReducer
    const[state, dispatch] = useReducer(PedidoReducer, inicialState)
    return(
        <PedidoContext.Provider
            value={{
                Pedido: state.Pedido
            }}
        >
            {props.children}
        </PedidoContext.Provider>
    )

}
export default PedidoState;
import React, {useReducer} from "react";
import firebase from "../../firebaseDB";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import Menu from "../../Screen/Menu";

const FirebaseState = props =>{
    // Crear estado inicial
    const inicialState ={
        Menu: []
    }
    //Definir useReducer
    const[state, dispatch] = useReducer(FirebaseReducer, inicialState)
    return(
        <FirebaseContext.Provider
            value={{
                menu: state.menu, firebase
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )

}
export default FirebaseState;
import react, {createContext, useState} from 'react';
import PropTypes from 'prop-types'; 

//se crea contexto
export const CartContext = createContext();

//proveedor de contexto
export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (product) => {
        setCarrito([...carrito, product])
    }

    const eliminarDelCarrito = (productId) => {
        setCarrito(carrito.filter((item)=> item.id !== productId))
    };

    return(
        <CartContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

// Validación de props con PropTypes
CartContext.propTypes = {
    carrito: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, // o PropTypes.number.isRequired, dependiendo del tipo
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            // Agrega cualquier otro campo necesario
        })
    ).isRequired,
    agregarAlCarrito: PropTypes.func.isRequired,
    eliminarDelCarrito: PropTypes.func.isRequired,
}

export default CartProvider;
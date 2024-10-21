import react, {createContext, useState} from 'react';
import PropTypes from 'prop-types'; 

//se crea contexto
export const CartContext = createContext();

//proveedor de contexto
export const CartProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])

    const generateUniqueId = (product) => {
        return `${product.name}-${product.category}`;
      };


    const agregarAlCarrito = (product) => {
        // setCarrito([...carrito, product])
        const uniqueId = generateUniqueId(product);
        setCarrito((prevCarrito)=>{
            const exist = prevCarrito.findIndex(item => item.uniqueId === uniqueId)
            if (exist >= 0){
                const updateProduct = [...prevCarrito]
                updateProduct[exist].quantity += 1
                return updateProduct
                
            }else{
                // setCarrito([...carrito, product])
                return[...prevCarrito, {...product,uniqueId ,quantity: 1}]
            }
        })
    }

    const quitarCarrito = (product)=>{
        const uniqueId = generateUniqueId(product);
        setCarrito((prevCarrito)=>{
            const exist = prevCarrito.findIndex(item => item.uniqueId === uniqueId)
            if (exist && exist.quantity > 1){
                return prevCarrito.map(item=>
                    item.id === uniqueId
                    ?{...item, quantity: item.quantity -1}
                    :item
                )
            }else{
                return prevCarrito.filter(item=>item.id !== uniqueId)
            }
        });
    }

    const eliminarDelCarrito = (product) => {
        const uniqueId = generateUniqueId(product);
        const productoExistente = carrito.find(item => item.uniqueId === uniqueId)

        if (productoExistente){
            if(productoExistente.quantity > 1){
                setCarrito(
                    carrito.map(item =>
                        item.uniqueId === uniqueId
                        ?{...item, quantity: item.quantity - 1}
                        :item
                    )
                )
            }else{
                setCarrito(carrito.filter(item=>item.uniqueId !== uniqueId))
            }
        }
    };

    const setearCarrito = ()=>{
        setCarrito([])
    }

    return(
        <CartContext.Provider value={{carrito, agregarAlCarrito, eliminarDelCarrito, setearCarrito, quitarCarrito}}>
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

// Hook personalizado para acceder al carrito fácilmente
// export const useCart = () => useContext(CartContext);
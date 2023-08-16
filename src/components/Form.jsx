import { useState } from "react";

const Form = ({ onSubmit }) => {
    
    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        felicidad: "",
    });

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.nombre.trim().length < 3 || user.nombre.trim() !== user.nombre || user.apellido.length < 6 || user.felicidad === "") {
            setError(true);
            onSubmit(null);
        } else {
            onSubmit(user);
            setError(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input type="text" onChange={(e) => {setUser({ ...user, nombre: e.target.value });}} /> <br/>
                <label>Apellido:</label>
                <input type="text" onChange={(e) => {setUser({ ...user, apellido: e.target.value });}} /> <br/>
                <label>Algo que te haga feliz:</label>
                <input type="text" onChange={(e) => {setUser({ ...user, felicidad: e.target.value });}} /> <br/>
                <button type="submit">¡Enviar!</button>
            </form>
            {error && <p className="error">Por favor, chequea que la información sea correcta.</p>}
        </>
    );
};

export default Form;

import gatito from "../assets/gatito.gif";

const Card = ({user}) => {
  return (
    <div>
      <p className="card">¡Gracias por llenar los campos, {user.nombre} {user.apellido}! Aquí tienes un gatito:</p>
      <img src={gatito}/>
    </div>
  )
}

export default Card
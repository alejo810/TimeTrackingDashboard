import "./TimeCard.jsx"
function TimeCard(props) {
    return (
        <div>
            <div className="card img  p-1 rounded-4" style={{backgroundColor:`${props.color}`,backgroundImage:`url(${props.imagen})`}}>
              
                
            </div>
            <div className='card fondo2 p-1 rounded-4 carddeabajo2'>
                <div className='card-body'>
                    <p className='text-white d-flex justify-content-start justify-content-between'>{props.nombre}<i class="bi bi-three-dots text-white "></i> </p>
                    <h1 className='text-white d-flex justify-content-start'>{props.horas}</h1>
                    <p className='text-white-50 d-flex justify-content-start'>{props.semana}</p>
                </div>
            </div>
        </div>
    )
}
export default TimeCard
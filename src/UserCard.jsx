import "./UserCard.css";

function UserCard(props) {
    return (
        <div>
                <div className="row">
                    <div className="card fondo1 px-4 rounded-4 ">
                        <div className='row'>
                            <div className="col">
                                <img className=' imagen mt-4 mb-2 ' src={`${props.logo}`} />
                            </div>
                        </div>

                        <div className="card-body">
                            <p className='text-white-50 d-flex justify-content-start '>Report for</p>
                            <h2 className='text-white d-flex justify-content-start fs-1 mb-4'>{props.nombre1}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="card fondo2 p-1 rounded-4 carddeabajo1">
                        <div className="card-body ">
                            <p className='text-white-50 d-flex justify-content-start'>Daily</p>
                            <p className='text-white-50 d-flex justify-content-start'>Week</p>
                            <p className='text-white-50 d-flex justify-content-start'>Monthly</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default UserCard
function Character (props) {
    return (

        <div>
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
            <ul>
                <li>Date of Birth: {props.birth}</li>
                <li>Date of Death: {props.death}</li>
                <li>Race:{props.race}</li>
                <li>Realm {props.realm}</li>
                <li>Spouce {props.spouce}</li>
            </ul>
        </div>
    )
}

export default Character;
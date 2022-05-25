

function Currency(props) {
    console.log(props);
    return (
        <div>
            <label>{props.id}</label>
            <input type="number" step="0.01" min="0" value={props.value}/>
        </div>
    )
}

export default Currency
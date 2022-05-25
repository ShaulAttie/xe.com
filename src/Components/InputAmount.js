export default function inputAmount(props) {

    return (

        <div className="input-row">
            <label htmlFor={props.id}>{props.lbl} </label>
            <input type="number" name={props.id} id={props.id} value={props.value} onChange={props.convert} />
        </div>

    )
}
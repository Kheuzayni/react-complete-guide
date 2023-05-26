export default function Fruit({ fruitInfo, onFruitDelete}){
    //state
    // const fruitInfo = props.fruitInfo;
    // const onFruitDelete = props.onFruitDelete;
    //Comportements

    //Affichages (render)
    return (
        <li key={fruitInfo.id}>
            {fruitInfo.nom} {" "}
            <button onClick={() => onFruitDelete(fruitInfo.id)} >Delete</button>
        </li>);

}

const Recipe=props=>{
    return(
        <div className="col-lg-3 col-12 my-4 mx-lg-5">
            <div className="card ">
            <img className="card-img-top" src={props.img} alt="recipe" />
            <div className="card-body">
            <h3 className="card-title">{props.name}</h3>
                <p>{props.cal}</p>
            <ol className="card-footer">
                {props.ingredients.map(m=><li>{m.food} - {m.foodCategory}</li>)}
            </ol>
            </div>
            </div>
        </div>
    )
}
export default Recipe
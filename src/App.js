import "./App.css";
import React from "react";
import Recipe from "./component/Recipe";
function App() {
  const [recipe,setrecipe]= React.useState([]);
  const [searchvalue,setsearchvalue]=React.useState()
  const [value,setvalue]=React.useState()
  const values=(e)=>{
    setvalue(e.target.value)
  }
  const addvalue=(e)=>{
    e.preventDefault()
    setsearchvalue(value)
  }
 const App_Id = "f5411653";
 const App_Key = "8516ea9e554106c63e2264e3dbf34565";
  React.useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchvalue}&app_id=${App_Id}&app_key=${App_Key}`
    )
      .then((res) => res.json())
      .then((data) => setrecipe(data.hits));
  }, [searchvalue]);
  return (
    <div className="App">
      
      <div className="col-lg-6 py-4 mx-auto">
        <form className="input-group">
          <input type="text" className="form-control" onChange={values} placeholder="Search"/>
          <button className="btn btn-primary form-input-text" onClick={addvalue}>
            Search
          </button>
        </form>
      </div>
      <div className="d-flex justify-content-between flex-wrap">
      {
        recipe.map((m,index)=><Recipe key={index} name={m.recipe.label} img={m.recipe.image} cal={m.recipe.calories} ingredients={m.recipe.ingredients}/>)
      }
      </div>
    </div>
  );
}

export default App;

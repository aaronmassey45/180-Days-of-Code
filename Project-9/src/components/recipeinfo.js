import React, {Component} from 'react';
import EditModal from './editmodal';

class RecipeInfo extends Component {
  deleteRecipe(id) {
    this.props.onDelete(id);
  }
  editRecipe(recipe, id) {
    this.props.onEdit(recipe, id);
  }
  render() {
    let ingredients;
    let { title, img, servings } = this.props.recipe;
    let collapseId = title.replace(/ /g, '');
    if (this.props.recipe.ingredients) {
      ingredients = this.props.recipe.ingredients.map(ingredient => {
        return (
          <li key={ingredient} className="text-left">{ingredient}</li>
        )
      });
    }
    return (
      <div className="RecipeInfo">
        <div className="col-sm-3">
          <div className="thumbnail img-responsive">
            <img src={img} alt={title}/>
            <button className="btn btn-info btn-block" type="button" data-toggle="collapse" data-target={`#${collapseId}`}>{title}</button>
            <div className="collapse" id={collapseId}>
              <div className="card card-block">
                <p>Makes {servings} servings</p>
                <p>Ingredients:</p>
                <ul>
                  {ingredients}
                </ul>
                <button className="btn btn-danger" onClick={this.deleteRecipe.bind(this, this.props.recipe.id)}>Delete</button>
                <EditModal recipe={this.props.recipe} editRecipe={this.editRecipe.bind(this)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeInfo;

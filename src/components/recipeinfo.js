import React, { Component } from 'react';
import EditModal from './editmodal';

class RecipeInfo extends Component {
  deleteRecipe(id){
    this.props.onDelete(id);
  }
  editRecipe(recipe,id){
    this.props.onEdit(recipe,id);
  }
  render() {
    let ingredients;
    let x=0;
    if (this.props.recipe.ingredients) {
      ingredients = this.props.recipe.ingredients.map(ingredient => {
        return (
          <li key={ingredient} className="text-left">{ingredient}</li>
        )
      });
    }
    x++;
    if (x%4===0) {
      return (
        <div className="RecipeInfo">
          <div className="row">
            <div className="col-sm-3">
              <div className="thumbnail img-responsive">
                <img src={this.props.recipe.img} alt={this.props.recipe.title} />
                <p>{this.props.recipe.title}</p>
                <ul>
                  {ingredients}
                </ul>
                <button className="btn btn-danger" onClick={this.deleteRecipe.bind(this, this.props.recipe.id)}>Delete</button>
                <EditModal recipe={this.props.recipe} editRecipe={this.editRecipe.bind(this)} />
              </div>
            </div>
          </div>

        </div>
      );
    } else {
      return (
      <div className="RecipeInfo">
        <div className="col-sm-3">
          <div className="thumbnail img-responsive">
            <img src={this.props.recipe.img} alt={this.props.recipe.title} />
            <p>{this.props.recipe.title}</p>
            <ul>
              {ingredients}
            </ul>
            <button className="btn btn-danger" onClick={this.deleteRecipe.bind(this, this.props.recipe.id)}>Delete</button>
            <EditModal recipe={this.props.recipe} editRecipe={this.editRecipe.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
  }
}

export default RecipeInfo;

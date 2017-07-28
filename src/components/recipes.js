import React, { Component } from 'react';
import RecipeInfo from './recipeinfo';

class Recipes extends Component {
  deleteRecipe(id){
    this.props.onDelete(id);
  }
  editRecipe(id){
    this.props.onEdit(id);
  }
  render() {
    let recipesInfo;
    if (this.props.recipes){
      recipesInfo = this.props.recipes.map(recipe => {
        //console.log(recipe);
        return (
          <RecipeInfo onDelete={this.deleteRecipe.bind(this)} onEdit={this.editRecipe.bind(this)} key={recipe.title} recipe={recipe} />
        )
      });
    }
    return (
      <div className="Recipes">
        {recipesInfo}
      </div>
    );
  }
}

export default Recipes;

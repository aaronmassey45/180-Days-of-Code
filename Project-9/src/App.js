import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Modal from './components/modal';
import Recipes from './components/recipes';
import uuid from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [
        {
          id: uuid.v4(),
          title: "Lemon Chicken",
          img: "https://d2kmm3vx031a1h.cloudfront.net/ueogiRtRsK3hSCSiKPJ1_lemon%202%20%281%20of%201%29.jpg",
          servings: 2,
          ingredients: ["lemon","chicken"]
        },
        {
          id: uuid.v4(),
          title: "Ramen Noodles",
          img: "https://s.thestreet.com/files/tsc/v2008/photos/all-pics/food/Chemicals2-1105.jpg",
          servings: 1,
          ingredients: ["ramen noodle package"]
        },
        {
          id: uuid.v4(),
          title: "Fried chicken",
          img: "http://img.sndimg.com/food/image/upload/h_465,w_620,c_fit/v1/img/recipes/49/48/48/picTqK2zM.jpg",
          servings: 10,
          ingredients: ["flour","chicken","oil"]
        }
      ]
    }
  }
  componentDidMount(){
    const { recipes } = this.state;
    let storage = JSON.parse(localStorage.getItem("_username_recipes"));
    let stuff = storage && storage.length !== 0 ? storage : recipes;
    this.setState({
      recipes: stuff
    })
  }
  handleNewRecipe(recipe) {
    let {recipes} = this.state;
    recipes.push(recipe);
    this.setState({ recipes }, this.setStorage);
  }
  handleDeleteRecipe(id) {
    let {recipes} = this.state;
    let index = recipes.findIndex(x => x.id === id);
    recipes.splice(index, 1);
    this.setState({ recipes }, this.setStorage);
  }
  handleEditRecipe = (recipe,id) => {
    let {recipes} = this.state;
    let index = recipes.findIndex(x => x.id === id);
    recipes.splice(index, 1, recipe);
    this.setState({ recipes }, this.setStorage);
  }
  setStorage = () => {
    let { recipes } = this.state;
    let list = [];
    if (recipes) {
      recipes.map(recipe => {
        list.push(recipe);
      });
      localStorage.setItem("_username_recipes", JSON.stringify(list));
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Modal addRecipe={this.handleNewRecipe.bind(this)}/>
        <Recipes recipes={this.state.recipes} onDelete={this.handleDeleteRecipe.bind(this)} onEdit={this.handleEditRecipe}/>
      </div>
    );
  }
}

export default App;

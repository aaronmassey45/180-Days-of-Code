import React, { Component } from 'react';

export default class EditModal extends Component {
  constructor(){
    super();

    this.state = {
      recipe: {}
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    let img = this.refs.img.value ? this.refs.img.value :'https://dummyimage.com/280X200/a6a6a6/000000&text=No+Food+Porn';
    this.setState({
      recipe: {
      id: this.props.recipe.id,
      title: this.refs.title.value,
      img: img,
      servings: this.refs.servings.value,
      ingredients: this.refs.ingredients.value.split(",")
    }}, function() {
      let {recipe} = this.state;
      this.props.editRecipe(recipe, recipe.id);
    });
  }
  render() {
    const {title, img, servings, ingredients,id} = this.props.recipe;
    console.log(title);
    return (
      <div>
        <button className="btn btn-primary" data-toggle='modal' data-target={`#${id}`}>Edit</button>
        <div id={id} className='modal fade' role='dialog'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button className='close' data-dismiss='modal'>&times;</button>
                <h4>Edit Recipe</h4>
              </div>
              <div className='modal-body'>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" ref="title" placeholder="Title" defaultValue={title} required/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" ref="img" placeholder="Image URL (Leave blank if none)" defaultValue={img} />
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" ref="servings" placeholder="# of Servings" defaultValue={servings} required/>
                  </div>
                  <h2 className="text-left"><b>Ingredients List</b></h2>
                  <div className="form-group">
                    <textarea className="form-control" ref="ingredients" placeholder="Enter ingredients separated,by,commas" defaultValue={ingredients} required/>
                  </div>
                  <input type="button" className='btn btn-success btn-block' data-dismiss="modal" value="Save Recipe" onClick={this.handleSubmit.bind(this)}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

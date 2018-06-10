import React, { Component } from 'react';
import uuid from 'uuid';

class Modal extends Component {
  constructor(){
    super();

    this.state = {
      newRecipe: {}
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    let img = this.refs.img.value ? this.refs.img.value :'https://dummyimage.com/280X200/a6a6a6/000000&text=No+Food+Porn';
    this.setState({
      recipe: {
      id: uuid.v4(),
      title: this.refs.title.value,
      img: img,
      servings: this.refs.servings.value,
      ingredients: this.refs.ingredients.value.split(",")
    }}, () => {
      let {recipe} = this.state;
      this.props.addRecipe(recipe, recipe.id);
    });

    this.refs.title.value = this.refs.img.value = this.refs.servings.value = this.refs.ingredients.value = null;
  }
  render() {
    return (
      <div>
        <button type='button' className='btn btn-success btn-lg add' data-toggle='modal' data-target='#myModal'>+ Add A Recipe</button>
        <div id='myModal' className='modal fade' role='dialog'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button className='close' data-dismiss='modal'>&times;</button>
                <h4>New Recipe</h4>
              </div>
              <div className='modal-body'>
                <form>
                  <div className="form-group">
                    <input type="text" className="form-control" ref="title" placeholder="Title" required/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" ref="img" placeholder="Image URL (Leave blank if none)" />
                  </div>
                  <div className="form-group">
                    <input type="number" className="form-control" ref="servings" placeholder="# of Servings" required/>
                  </div>
                  <h2 className="text-left"><b>Ingredients List</b></h2>
                  <div className="form-group">
                    <textarea className="form-control" ref="ingredients" placeholder="Enter ingredients separated,by,commas" required/>
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

export default Modal;

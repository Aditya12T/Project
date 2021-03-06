import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProjects extends Component {
 constructor(){
     super();
     this.state = {
         newProject:{}
     }
 } 
 
    static defaultProps ={
     categories: ['Web Design', 'Web Development', 'Mobile Development']
 }
    handleSubmit(e){
       if(this.refs.title.value === ''){
           alert('Title is required');
       } else {
           this.setState({newProject:{
               id: uuid.v4(),
               title: this.refs.title.value,
               category: this.refs.category.value
           }}, function(){
              // console.log(this.state);
              this.props.addProjects(this.state.newProject);
           });
       }
        e.preventDefault();
    }
    render() {
        let categoryOptions = this.props.categories.map(category =>{
            return <option key={category} value={category}>{category}</option>
        });
   return (
      <div>
        <h3>Add Projects</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label><br/>
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category</label><br/>
                <select ref="category">
                {categoryOptions}
                </select>
            </div><br/>
            <input type="submit" value="submit"/>

        </form>
       </div>
    );
  }
}

AddProjects.propTypes = {
    categories: PropTypes.array,
    addProjects: PropTypes.func
 };

export default AddProjects;

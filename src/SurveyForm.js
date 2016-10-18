var React = require('react');

var SurveyForm = React.createClass({
  getInitialState: function(){
    return {
      results: null
    }
  },
  updateResults: function(formResults){
    this.setState({
      results: formResults
    })
  },
  render: function(){
    return (this.state.results === null) ?
    <FormComponent updateResults={this.updateResults}/> :
    <ResultsComponent results={this.state.results}/>
  }
})

//Form Component
var FormComponent = React.createClass({
  getInitialState: function(){
    return {
      name: "",
      course: "",
      rating: "",
      comment: ""
    }
  },
  handleInputChange(key, e){
    var stateObj = this.state
    stateObj[key] = e.target.value
    this.setState(stateObj)
  },
  handleFormSubmit(e){
    e.preventDefault()
    this.props.updateResults(this.state)
    console.log("Form Has been Submitted, need to change the results from null to True",this.state)

  },
  render: function(){
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name</label>
        <input value={this.state.name} type="text"
        onChange={this.handleInputChange.bind(this, 'name')}/><br/>
        <select onChange={this.handleInputChange.bind(this, 'course')} value={this.state.course}>
          <option defaultValue="choose">Choose Course</option>
          <option>React</option>
          <option>Angular</option>
          <option>BackBone</option>
        </select><br/>
        <label>Rating</label>
        <input onChange={this.handleInputChange.bind(this, 'rating')} value={this.state.rating} type="number" /><br/>
        <label>Comment</label>
        <textarea onChange={this.handleInputChange.bind(this, 'comment')} value={this.state.comment}></textarea><br/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
})

// ReultsComponents
var ResultsComponent = React.createClass({
  render: function(){
    var results = this.props.results
    return (
      <div>
      <h1>Results</h1>
        <p>Name:{results.name}</p>
        <p>Course:{results.course}</p>
        <p>Rating:{results.rating}</p>
        <p>Comment:{results.comment}</p>
      </div>
    )
  }
})




module.exports = SurveyForm

var React = require('react')

var imgStyle = {
  height: '400px',
  width: '400px'
}

module.exports = React.createClass({

<<<<<<< HEAD
  render: function () {
    return (
      <div className="col-md-4 portfolio-item">
          <h2>{ this.props.name }</h2>
          <a href="#">
              <img className="img-responsive" src="images/scream.png" alt="" />
          </a>
          <h3 className="title">
          <a href="#">Scream</a>
          </h3>
          <h4> Jason Server </h4>
          <h4> Value: $500 </h4>
          <h5> Rating: * * * * * </h5>
          <h5> Owner: FuckElf Mcfuckface </h5>
=======
  render: function() {
    return (
      <div className="col-md-4 portfolio-item">
        <a href="#">
          <img className="img-responsive" src="images/scream.png" alt="" />
        </a>
        <h3 className="title">
        <a href="#">{this.props.title}</a>
        </h3>
        <h4>{this.props.artist}</h4>
        <h4> Value: {this.props.value}</h4>
        <h5> Rating: {this.props.rating}</h5>
        <h5> Owner: {this.props.owner}</h5>
>>>>>>> c4ad7812a21f9b68cca93768ea8ad23c5cd60991
      </div>
    )
  }
})

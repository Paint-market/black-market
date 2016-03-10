var React = require('react')

var imgStyle = {
  height: '400px',
  width: '400px'
}

module.exports = React.createClass({

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
      </div>
    )
  }
})

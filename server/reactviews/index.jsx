var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');

// Contrived example to show how one might use Flow type annotations
function countTo(n: number): string {
  var a = [];
  for (var i = 0; i < n; i++) {
    a.push(i + 1);
  }
  return a.join(', ');
}

class Index extends React.Component {

  handleClick(){
    
    alert(3)
  }
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p onClick={this.handleClick.bind(this)}>Welcome to {this.props.title}</p>
        <p>
          I can count to 10:
          {this.props.foo.bar}
          {countTo(10)}
        </p>
      </Layout>
    );
  }
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;
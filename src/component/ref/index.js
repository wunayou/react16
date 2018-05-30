import React from  'react'

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  ));
  
  // You can now get a ref directly to the DOM button:

/**
 * 
 * 1可以使用函数组件里面
 * 2 ref可以传递 通过 React.forwardRef
 */
class Tse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.ref = React.createRef();
    }
    componentDidMount(){
        console.log(this.ref.current.offsetHeight)
    }
    render() {
        return (
            <FancyButton ref={this.ref}>Click me!</FancyButton>
        );
    }
}

export default Tse;


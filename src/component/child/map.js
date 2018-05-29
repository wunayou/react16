import React from  'react'






 class Tse extends React.Component {
    render() {
        const childrenWithExtraProp = React.Children.map(this.props.children, child => {
            console.log(child)
            console.log(child.type.name)
            console.log( typeof child.type)
            console.log(child.props)
            return React.cloneElement(child, {
              isPlaying: child.props.title === "32322332"
            });
          });
        return (
            <div>
                    {childrenWithExtraProp}
            </div>
        );
    }
}

class AA extends React.Component {
    render() {
        return (
            <div className="movie-browser">
                    {this.props.title}
            </div>
        );
    }
}

export default  class Mpa extends React.Component {

    render() {
        return (
            <Tse>
                <AA title="aa" name="11"/>
                <AA title="cc"/>
                <AA title="dd"/>
                <AA title="bb"/>
            </Tse>
        );
    }
}
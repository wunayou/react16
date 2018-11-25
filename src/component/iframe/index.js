import React, { Component } from 'react';
class Iframe extends Component {
    testref= React.createRef()
    constructor(props){
        super(props)
        // this.testref.current.onload=()=>{
        //     console.log('2020230230320')
        // }
    }
componentDidMount(){
    var iframe =this.testref.current; //获取iframe标签
    var iwindow = iframe.contentWindow; //获取iframe的window对象
    var idoc = iwindow.document; //获取iframe的document对象
    console.log(idoc.documentElement); //获取iframe的html
    console.log("body",idoc.body);
}
  render() {
    return (
      <div className="App">
        <iframe src="http://caipiao.163.com/award/cqssc/" onLoad={()=>{console.log('2030203')}} frameBorder="0" name="myiframe" ref={this.testref}/>
      </div>
    );
  }
}

export default Iframe;

import React, { Component } from 'react';

export class RefClassComponent extends Component {
    constructor(props){
        super(props)
        this.iRef=React.createRef()
        this.pRef=React.createRef()
    }
    componentDidMount(){
        console.log(this.iRef);
        this.iRef.current.focus()
    }
  render() {
    return <div>
<input type='text' ref={this.iRef} placeholder='Enter UserName'/>
<input ref={this.pRef} type='password' placeholder='Entet Password'/>
<button >Login</button>
    </div>;
  }
}

export default RefClassComponent;

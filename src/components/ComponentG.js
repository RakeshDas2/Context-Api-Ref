import React, { Component } from 'react';
import UserContext, { UserConsumer } from '../context-api/UserContext';

export default class ComponentG extends Component {
    static contextType=UserContext

    componentDidMount(){
        console.log(this);
        console.log('context',this.context);
    }
  render() {
    return <div>
        <UserConsumer>
            {
                (contextData)=>{
                    return <p>Component-G {contextData}</p>
                }
            }
        </UserConsumer>
        <p>Name::: {this.context}</p>
    </div>;
  }
}

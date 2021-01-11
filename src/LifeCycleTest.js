import React from 'react';

class LifeCycle extends React.Component {
    constructor(props){
        super(props);
        console.log('LifecycleTest Constructor');
    }

    componentDidUpdate() {}
    componentDidMount() {}

    render() {
        return <p>I only show up if the conditional is true!</p>;
    } 

    
}

export default LifeCycle;
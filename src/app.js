import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/users')
             .then(res => {
                 console.log(res.data);
             })
    }

    render() {
        return (
            <h1>Welcome to React!</h1>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
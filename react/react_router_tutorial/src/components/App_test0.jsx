import React from 'react';
import { Link, Route, Switch  } from 'react-router-dom';

const Home = () => (
    <div>
    <h2>Home</h2>
    </div>
)

const Category = () => (
    <div>
    <h2>Category</h2>
    </div>

)

const Products = () => (
    <div>
    <h2>Products</h2>
    </div>

)

class App extends React.Component {

    render() {
        return (
            <div>
            <h1>hello every body</h1>
            <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">

            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>

            </ul>
            </nav>

            <Route path="/" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/products" component={Products}/>

            </div>
        )
    }
}

export default App;

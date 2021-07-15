import { BrowserRouter as Router, Route } from 'react-router-dom'
import Title from './Title'
import Footer from './Footer'
import Menu from './Menu'
import Redirect from './Redirect'
import Detail from './Detail'

const Main = () => (
    <Router>
        <div className="App">
            <header className="App-header">
                <Title />
                <Route path="/" exact component={Redirect} />
                <Route path="/menu" exact render={(routerProps) =>
                    <Menu
                        {...routerProps}
                        season="WINTER"
                    />
                } />
                <Route path="/details/:pasta" component={Detail} />
                {/* use this instead for working with query strings ?pasta= */}
                {/* <Route path="/details" component={Detail} /> */}
                <Footer />
            </header>
        </div>
    </Router>

)

export default Main
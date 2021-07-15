import logo from './logo.svg'
import './App.css'
import { Component } from 'react'
// import { myFetch } from './functions'

class App extends Component {
  state = {
    todos: [],
    test: '',
  }

  // async componentDidMount() {
  componentDidMount = async () => {
    // a method that gets fired just ONCE for every lifecycle of a component
    // it's getting executed just AFTER the INITIAL RENDER
    // it means that it's the perfect place for doing expensive operations like a fetch

    // you can use fetch() in two ways: the chained then method and the async/await
    // 1)
    // fetch('https://jsonplaceholder.typicode.com/todos', {
    //   // the place for some extra configuration options, like 'method', like 'body', like 'headers'
    // })
    //   .then((res) => {
    //     console.log(res)
    //     return res.json()
    //   })
    //   .then((data) => console.log(data))
    //   .catch(error => console.log(error))
    // 2)
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/todos')
      console.log(response)
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        this.setState({
          todos: data,
        })
        // super safe because we are going to execute componentDidMount just once
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidUpdate = (previousProps, previousState) => {
    // exactly like render
    // it will be triggered every time there's a change in the state or in the props of this component
    // ---- WARNING -----
    // you should always prevent an infinite loop, so you should stop the execution of your setState at some time
    // try to check your props or your state and compare them with their previous value
    // if (previousProps !== this.props) {
    // this.setState({
    //   test: 'Stefano',
    // })
    // }
  }

  // handleClick() {
  //   // is going to have its own scope
  //   // and so this will be undefined
  //   this.setState({
  //     test: 'Stefano',
  //   })
  // }

  handleClick = () => {
    console.log('we have the this here!', this)
    let data = this.test(10)
    console.log(data)
  }

  test = (num) => ({
    // this is for returning an object!
    value: num * 5 + 20,
  })

  // same thing with a longer syntax
  // test = (num) => {
  //   return {
  //     value: num * 5 + 20,
  //   }
  // }

  render() {
    // render is in charge of showing your JSX
    // render gets executed every time there's a change in the PROPS or in the STATE of this component
    return (
      <div className="App" onClick={this.handleClick}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App

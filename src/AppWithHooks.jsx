import logo from './logo.svg'
import './App.css'
import { useState, useEffect } from 'react'
// import { myFetch } from './functions'

const App = () => {

    // const returnValue = useState([])
    // const todos = returnValue[0]
    // const setTodos = returnValue[1]

    const [todos, setTodos] = useState([])


    const [test, setTest] = useState('')

    const [searchValue, setSearchValue] = useState('')
    // this is how you can use the state in a functional component
    // every time you use the setter function (setTodos, setTest, etc.)
    // you are REPLACING the value of your variable

    // useEffect can replace componentDidMount, componentDidUpdate and componentWillUnmount
    // in a functional component

    useEffect(() => {
        // this is the effect, the code you want to execute
        console.log('hello!')
        setTest('Jonathan')
    })
    // if you write it WITHOUT a second parameter, the effect will be re-called every time
    // there's an UPDATE in your component (update -> change in the state or in the props)
    // -> THIS SHAPE IS === TO COMPONENTDIDUPDATE

    useEffect(() => {
        // this is the effect, the code you want to execute
        console.log('updated todos!')
    }, [
        // this is not a generic COMPONENTDIDUPDATE any more, but you can listen to specific
        // values, state variables, props, etc. in order to programmatically trigger again 
        // the effect
        todos
    ])
    // -> THIS SHAPE IS === TO A SMARTER COMPONENTDIDUPDATE WITH A TODOS CONDITION

    useEffect(() => {
        console.log('like componentDidMount in a class component!')
        fetchData()
    }, [])

    useEffect(() => {
        fetchData()
    }, [searchValue])

    const fetchData = async () => {
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos')
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                setTodos(data)
                // this.setState({
                //     todos: data,
                // })
            }
        } catch (error) {
            console.log(error)
        }
    }



    // render is in charge of showing your JSX
    // render gets executed every time there's a change in the PROPS or in the STATE of this component
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <input type="text"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    placeholder="write here"
                />
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

export default App

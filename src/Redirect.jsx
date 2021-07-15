import { Link } from 'react-router-dom'

const Redirect = ({ history, location, match }) => {

    const handleKeyStrokes = (text) => {
        if (text === 'menu') {
            console.log("I'll redirect to menu now!")
            history.push('/menu')
            // this will replace the current history element instead of appending a new one
            // so you can prevent the user from going back!
            // history.replace('/menu')
        }
    }

    return (
        <>
            {/* <Link to="/menu" style={{ color: 'white', textDecoration: 'none' }}>
                <div>
                    GO TO MENU
                </div>
            </Link> */}
            <div>
                Where do you want to go?
                <input type="text" onChange={(e) => handleKeyStrokes(e.target.value)} />
            </div>
        </>
    )
}

export default Redirect
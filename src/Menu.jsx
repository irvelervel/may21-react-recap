const Menu = (props) => (
    <div>
        <h1>{props.season || 'DEFAULT'} MENU</h1>
        <ul>
            <li onClick={() => props.history.push('/details/carbonara')}>Carbonara</li>
            <li onClick={() => props.history.push('/details/amatriciana')}>Amatriciana</li>
            <li onClick={() => props.history.push('/details/gricia')}>Gricia</li>

            {/* use this instead for working with query strings ?pasta= */}
            {/* <li onClick={() => props.history.push('/details?pasta=carbonara')}>Carbonara</li>
            <li onClick={() => props.history.push('/details?pasta=amatriciana')}>Amatriciana</li>
            <li onClick={() => props.history.push('/details?pasta=gricia')}>Gricia</li> */}
        </ul>
    </div>
)

export default Menu
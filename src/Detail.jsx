// import { useEffect } from "react"

const Detail = (props) => {

    // use this instead for working with query strings ?pasta=
    // useEffect(() => {
    //     let search = new URLSearchParams(window.location.search)
    //     console.log(search.get('pasta'))
    // }, [])

    return (
        <h1>LOADING THE DETAILS of {props.match.params.pasta}</h1>
    )
}

export default Detail
export const myFetch = async () => {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos')
    console.log(response)
    if (response.ok) {
      let data = await response.json()
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}

import { useEffect, useState } from "react"
import axios from "axios"
import Card from "./components/Card"

const App = () => {
  // Stores the images/users received from the API
  const [userData, setUserData] = useState([])

  // Stores the current page number
  const [index, setIndex] = useState(1)

  // Function to fetch data from the Picsum API
  const getData = async () => {
    // Send a GET request to the API for the current page
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    // Store the API response inside userData
    setUserData(response.data)
  }

  // Fetch new data whenever the page number changes
  useEffect(function () {
    getData()
  }, [index])

  // Show "Loading..." while the API data is being fetched
  let printUserData = <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">Loading...</h3>

  // Once data is available, create a Card component for every item
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        {/* Pass the current API item to the Card component */}
        <Card elem={elem} />
      </div>
    })
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">

      {/* Container where all the image cards are displayed */}
      <div className="flex h-[80%] flex-wrap gap-9 p-2">
        {printUserData}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center gap-6 items-center p-4">

        {/* Previous page button */}
        <button
          onClick={() => {
            // Only allow going back if we are not on the first page
            if (index > 1) {
              setIndex(index - 1)

              // Clear old data while the new page is loading
              setUserData([])
            }
          }}

          // Make the button slightly transparent on the first page
          style={{ opacity: index == 1 ? 0 : 1 }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold">
          Prev
        </button>

        {/* Display the current page number */}
        <h4>Page {index}</h4>

        {/* Next page button */}
        <button onClick={() => {
          // Clear the previous page data
          setUserData([])

          // Move to the next page
          setIndex(index + 1)
        }}
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold">
          Next
        </button>
      </div>
    </div>
  )
}

export default App
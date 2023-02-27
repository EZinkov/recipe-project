import React from "react"
import Recipes from "./components/Recipes"
import Details from "./components/Details"
import Footer from "./components/Footer"

function App() {
  const [summary, setSummary] = React.useState([])
  const [food, setFood] = React.useState("")
  const [isDetails, setIsDetails] = React.useState(false)
  const [currentRecipeIndex, setCurrentRecipeIndex] = React.useState(0)
  const [hasSearched, setHasSearched] = React.useState(false)
  const [searching, setSearching] = React.useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSearching(true)

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        "X-RapidAPI-Key": "4450aa1a9emsha30afbd3a84392bp15df66jsncfef154d40be",
      },
    }
    setSummary([])

    fetch(
      `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${food}`,
      options
    )
      .then(response => response.json())
      .then(response => {
        setSummary(response.results)
        setHasSearched(true)
        setSearching(false)
      })
      .catch(err => console.error(err))
  }
  console.log(summary)

  function handleChange(e) {
    setFood(e.target.value)
  }

  function setDetails(recipeIndex) {
    setCurrentRecipeIndex(recipeIndex)
    setIsDetails(!isDetails)
    window.scrollTo(0, 0)
  }

  return (
    <div className="container my-0 mx-auto">
      {!isDetails && (
        <div className="flex flex-col justify-center items-center h-56 bg-gradient-to-br from-blue-500 to-emerald-400 text-slate-50 rounded-b-lg">
          <h1 className="text-2xl font-bold capitalize  ">Recipe Haven</h1>
          <h4 className="text-xl font-semibold uppercase">
            Find your next favorite recipe with just a few clicks
          </h4>
        </div>
      )}
      {!isDetails && (
        <form
          className="flex justify-center shadow-black/50 shadow-sm mx-auto mt-[-25px] w-[620px]"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full outline-none rounded-l-md pl-4 h-12"
            type="text"
            placeholder="Search an ingredient"
            value={food}
            onChange={handleChange}
          ></input>
          <button className="px-6 rounded-r-md bg-gradient-to-tl text-white from-purple-500 to-slate-600">
            Submit
          </button>
        </form>
      )}
      {!isDetails && (
        <Recipes
          summary={summary}
          setDetails={setDetails}
          hasSearched={hasSearched}
          searching={searching}
        />
      )}
      {isDetails && (
        <Details
          currentRecipe={summary[currentRecipeIndex]}
          setDetails={setDetails}
        />
      )}
      <Footer />
    </div>
  )
}

export default App

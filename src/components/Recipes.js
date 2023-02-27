import React from "react"
import fork from "../assets/fork.png"
import { InfinitySpin } from "react-loader-spinner"

const Recipes = props => {
  const recipeElements = props.summary.map((recipe, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center p-4 bg-blue-100 h-full rounded-t-md"
      >
        <div className=" h-96 w-full overflow-hidden">
          <img
            className="h-full w-full object-cover rounded-md"
            src={recipe.thumbnail_url}
            alt={recipe.name}
          />
        </div>
        <h3 className="mt-4 text-center text-[#1E375A] text-xl font-semibold">
          {recipe.name}
        </h3>
        <p className="mt-4 break-words text-justify text-slate-700 flex-1">
          {recipe.description}
          {!recipe.description &&
            'Click the "Read more" button below for detailed steps to make this dish, or click the "Watch the video" button to see a demonstration.'}
        </p>
        <div className="flex justify-between py-2 w-full mt-3">
          {recipe.original_video_url && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={recipe.original_video_url}
            >
              <button className="py-4 px-6 rounded-full hover:text-blue-600 duration-300 bg-white text-blue-900 font-semibold">
                Watch Video
              </button>
            </a>
          )}
          <button
            className="py-4 px-6 rounded-full hover:text-blue-600 duration-300 bg-white text-blue-900 font-semibold"
            onClick={() => props.setDetails(index)}
          >
            Full Recipe
          </button>
        </div>
      </div>
    )
  })
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      {!props.hasSearched && !props.searching && (
        <div>
          <img className="h-[160px] w-[160px]" src={fork} alt="start search" />
          <p className="text-center text-xl font-semibold text-gray-800">
            Start exploring
          </p>
        </div>
      )}
      {props.searching && <InfinitySpin width="200" color="#1E90FF" />}
      {props.hasSearched && !props.searching && props.summary.length === 0 && (
        <p className="text-xl font-medium">
          There were no recipes with that ingredient.
        </p>
      )}
      <div className="grid grid-cols-3 gap-10 mb-24">{recipeElements}</div>
    </div>
  )
}

export default Recipes

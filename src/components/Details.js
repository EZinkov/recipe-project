import React from "react"

const Details = props => {
  const ingredientsElements = props.currentRecipe.sections[0].components.map(
    item => {
      return (
        <div>
          <li className="list-disc py-1">{item.raw_text}</li>
        </div>
      )
    }
  )

  const instructionsElements = props.currentRecipe.instructions.map(step => {
    return <li className="list-decimal py-1">{step.display_text}</li>
  })
  return (
    <div>
      <div className="w-full my-0 mx-auto">
        <h3 className="text-center font-bold text-3xl py-4">
          {props.currentRecipe.name}
        </h3>
        <div className="flex justify-between">
          <div>
            <button
              className="py-4 px-6 rounded-full bg-blue-500 hover:bg-blue-700 duration-300 text-white"
              onClick={props.setDetails}
            >
              Return to Search
            </button>
          </div>
          <div>
            {props.currentRecipe.original_video_url && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={props.currentRecipe.original_video_url}
              >
                <button className="py-4 px-6 rounded-full bg-blue-500 hover:bg-blue-700 duration-300 text-white">
                  Watch the video
                </button>
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="h-96 w-full flex justify-center p-8">
        <img
          class="h-full w-full object-cover rounded-md"
          src={props.currentRecipe.thumbnail_url}
          alt={props.currentRecipe.name}
        />
        <p class="ml-6 text-lg">{props.currentRecipe.description}</p>
      </div>
      <div className="px-8">
        <p className="text-2xl mb-2 font-bold">Ingredients:</p>
        <ul className="ml-4 text-lg">{ingredientsElements}</ul>
        <p className="text-2xl mt-6 mb-2 font-bold">Preparation:</p>
        <ol className="ml-4 text-lg">{instructionsElements}</ol>
      </div>
    </div>
  )
}

export default Details

import { useState } from 'react'

export default function GalleryCard(props: Props) {
  const [showDescription, set] = useState(false)

  return (
    <>
      {showDescription ? (
        <div className="fixed inset-0" onClick={() => set(false)} />
      ) : null}
      <button
        className="relative overflow-hidden hover:ring-[6px] ring-primary-600/40 duration-300 rounded-2xl"
        onClick={() => set(!showDescription)}
      >
        <img
          src={props.image}
          alt=""
          className="rounded-2xl w-full h-48 object-cover"
        />
        <div
          className={`w-full backdrop-blur-3xl h-full absolute duration-300 grid place-content-center top-0 ${
            showDescription ? 'opacity-100 bg-black/60 ' : 'opacity-0'
          }`}
        >
          <h1 className="text-left p-4 text-white font-medium">
            {props.caption}
          </h1>
        </div>
      </button>
    </>
  )
}

interface Props {
  image: string
  caption: string
}

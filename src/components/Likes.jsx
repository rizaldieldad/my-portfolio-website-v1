import { useState, useEffect } from 'react'

function Likes () {
  // user loads the page
  // fetch likes count from API and display it on the button
  // when user clicks like button, send request to API and update the likes count
  // save isLike = true on the localStorage
  // when user click unline button, send request to API and update the likes count

  const [likes, setLikes] = useState(0)
  const [isLike, setIsLike] = useState(() => {
    const liked = localStorage.getItem('isLike')
    return liked ?? false
  })

  useEffect(() => {
    const fetchLikes = async () => {
      const response = await fetch('http://localhost:3000/likes')
      const data = await response.json()
      setLikes(data.count)
    }
    fetchLikes()
  }, [])

  const handleLike = async () => {
    const response = await fetch('http://localhost:3000/like', {
      method: 'POST'
    })

    const data = await response.json()
    setLikes(data.count)

    localStorage.setItem('isLike', true)
    setIsLike(true)
  }

  const handleUnlike = async () => {
    const response = await fetch('http://localhost:3000/unlike', {
      method: 'POST'
    })

    const data = await response.json()
    setLikes(data.count)

    localStorage.setItem('isLike', false)
    setIsLike(false)
  }

  return (
    <>
      {isLike ? (
        <button
          onClick={handleUnlike}
          className='text-white bg-rose-900 rounded-full px-4 py-2 hover:scale-110 cursor-pointer transition-transform duration-200'
        >
          👎 Unlike!
        </button>
      ) : (
        <button
          onClick={handleLike}
          className='text-white bg-teal-900 rounded-full px-4 py-2 hover:scale-110 cursor-pointer transition-transform duration-200'
        >
          👍 Like!
        </button>
      )}
      <span>{likes} people likes my profile</span>
    </>
  )
}

export default Likes

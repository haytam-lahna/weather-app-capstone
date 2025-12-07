export default function Search({ onSearch }) {
  const submitHandler = (e) => {
    e.preventDefault()
    const city = e.target.city.value.trim()
    if (!city) return
    onSearch(city)
    e.target.reset()
  }

  return (
    <form onSubmit={submitHandler} className="flex gap-2">
      <input
        type="text"
        name="city"
        placeholder="Enter city"
        className="border px-3 py-2 w-full rounded"
      />
      <button className="bg-blue-600 text-white px-4 rounded">
        Search
      </button>
    </form>
  )
}

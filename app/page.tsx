'use client'
export default function Home() {

  const handleDelete = () => {
    console.log('btn click');
    
    window.confirm(' you really want to delete')
  }

  return (
    <div >
      <button
        onClick={handleDelete}
      >
        <h1>
          Delete
        </h1>
      </button>
    </div>
  )
}

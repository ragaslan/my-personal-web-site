import React from 'react'

function AddLanguage() {
  return (
    <div>
        <form>
            <div className="input-group flex flex-col max-w-[400px] gap-2">
            <label htmlFor="new-language">Yeni Dil Ekle</label>
            <input
                className="border-2 border-gray-600 h-10 rounded-md p-2"
                type="text"
                name="new-language"
                id="new-language"
            />
            </div>
            <button className='bg-green-600 text-white px-6 py-2 mt-4 rounded' type='submit'>
                Ekle
            </button>
        </form>
    </div>
  )
}

export default AddLanguage
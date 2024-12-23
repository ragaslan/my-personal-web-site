import React from 'react'

function BlogTag({data}) {
    const tagUrl = data.replace(" ","-")
  return (
    <a href={`/blog?tag=${tagUrl}`} className='p-1 bg-blue-400 rounded text-blue-100 text-[11px] mt-2'>
        {data}
    </a>
  )
}

export default BlogTag
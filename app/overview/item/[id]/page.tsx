// this page displays the selected requested item [car, gun, base, etc]
import React from 'react'

// how this page works:
// - call from cache of obj if dne already

// slug is a string that can only include characters, numbers, dashes, and underscores. 
const Item_page = ({params} : {params: {slug: string}}) => {
    return (
        <div>item: {params.id}</div>
    )
}

export default Item_page;
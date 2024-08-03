import React, { useEffect } from 'react'

export const useUpdateTitle = (title) => {

    useEffect(() => {
        document.title = `${title}`;
    })

    return null;
}





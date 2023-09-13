
import React from 'react'

import { useState  , useEffect , useCallback} from "react"


function useScrollObserver () {
    const [scrollY, setScrollY] = useState<number>(0);

    //memoizar la función en caché usando useCallback, cada vez que el usuario interactue con el scroll
    const handleScrollY = useCallback(() => {
    setScrollY(window.scrollY)
    }, [])

    useEffect(() => {
    window.addEventListener('scroll' , handleScrollY)

    return () => {
    window.removeEventListener('scroll' , handleScrollY)
    }

     }, [])
    
    
     return {
      scrollY
    }

}

export default useScrollObserver
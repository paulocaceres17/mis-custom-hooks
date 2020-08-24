import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true) // Para resolver fugas de memoria
    // index.js:1 Warning: Can't perform a React state update on an unmounted component. 
    // This is a no-op, but it indicates a memory leak in your application. 
    // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function

    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        
        setstate({
            data: null,
            loading: true,
            error: null
        });

        fetch( url )
        .then( resp => resp.json() )
        .then( data => {

            // setTimeout( () => {

            // }, 3000)
            
            if( isMounted.current ) {
                setstate({
                    loading: false,
                    error: null,
                    data
                })
            }
            else{
                console.log('serState, no se llamó')
            }
            
        });
    }, [url])

    return state;
}

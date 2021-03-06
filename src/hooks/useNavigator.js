import {useState, useEffect} from 'react'

const useNavigator = () => {
    const [location, setLocation] = useState({})

    const getLocationPromise = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (e) => {setLocation({lat: e.coords.latitude, lon: e.coords.longitude})
            resolve(e)
            },
            (error) => reject(error)
            )
        })
    }

    useEffect(() => {
        getLocationPromise()
    },[])

    return location
}


export default useNavigator
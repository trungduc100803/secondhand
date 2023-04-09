import { useMemo, useState } from "react"



function useLoad(listdata, page){
    const [ data, setData ] = useState([])
    const url = window.location.pathname
    useMemo(() => {
        listdata.forEach((dat) =>  {
            if(`/` + `${page}` + `/%20+%20` + `${dat.id}` === url){
                setData(dat)
            }
        })
    
    }, [listdata])
    return data
}

export default useLoad
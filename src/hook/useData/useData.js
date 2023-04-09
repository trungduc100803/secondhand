import { onSnapshot, collection  } from "firebase/firestore"
import { useState, useMemo } from "react"
import { db } from "../../firebase"

// const getData = (ref) => {
//     const [ listData, setListData ] = useState([])
//     getDocs(ref)
//     .then((snapshot) => {
//         let data  = []
//         snapshot.docs.forEach((doc) => {
//             data.push({...doc.data()})
//         })
//         setListData(data)
//     } )
//     .catch(err =>{
//         console.log(err.message)
//     })
//     return listData
// } 


function useData(coll) {
    const [ data, setData ] =useState([])
    const ref = collection(db, coll)
    useMemo(() => {
        onSnapshot(ref, (snap) => {
            let collections = []
            snap.docs.forEach((doc) => {
                collections.push({...doc.data(), id: doc.id})
            })
            setData(collections)
        })
    }, [coll])
    return data
}
export default useData;
// const[fuel,setFuel]=useState([])
// const abPath=collection(oFirestore,'fuel')
// useEffect(()=>{
//   const DispData=async()=>{
//   const Data = await getDocs(abPath)
//   console.log(Data)
//   setFuel(data.docs.map((val)=>({...val.data(),id:val.id})))
//   }
//   DispData()
// },[])

// const [wkGroups, setwkGroups] = useState([])
// useEffect(()=>{
//   getGroups()
// },[])
// function getGroups(){
//   const groupCollection = collection(oFirestore, 'WorkGroups')
//   getDocs(groupCollection)
//   .then(Response=>{
//     const groups = Response.docs.map(doc=>({
//       data:doc.data(),
//       id:doc.id,
//     }))
//     console.log(groups)
//     setwkGroups(groups)
//   })
//   .catch(error => console.log(error.message))
// }

{/* <ul>
{wkGroups.map(wkGroup=> (
  <li key={wkGroup.id}>{wkGroup.data.name}</li>
))}
</ul> */}
// import { oFirestore } from './firebase-config';
// import {collection,getDocs} from 'firebase/firestore';
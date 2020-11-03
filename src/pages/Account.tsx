import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { RouteComponentProps } from 'react-router-dom'

const auth = firebase.auth()
const ref = firebase.firestore().collection('school')

type SchoolsType = { title: string; id: string; desc: string }[]
const Account:React.FC<RouteComponentProps> = (props) => {
  const [schools, setSchools] = useState<SchoolsType | any >([])
  const [loading, setLoading] = useState<Boolean>(false)
  // console.log(ref)
  const getSchools = () => {
    setLoading(true)
    ref.onSnapshot((querySnapShot) => {
      const items:any = []
      querySnapShot.forEach((doc) => {
        items.push(doc.data())
      })

      setSchools(items)
      setLoading(false)
    })
  }
  useEffect(() => {
    if(!auth.currentUser) {
      props.history.push('/signin')
    } else {
      getSchools()
    }
  }, [auth.currentUser])
  if(loading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='container'>
      <div className="user-info">
       <h4 className="greet">Hello { auth.currentUser?.displayName || auth.currentUser?.email}</h4>
      <p>You are now logged in</p>
      </div>
      <div className="schools">
        <h3>List of Schools</h3>
        {schools.map((school: { title: string; id: string; desc: string }) => (
          <div className='school-info' key={school.id}>
            <h4>{school.title}</h4>
            <p>{school.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Account

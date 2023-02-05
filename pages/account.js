import React from 'react'
import { useCurrentUser } from '../hooks/current-user'

const Account = () => {
  const { currentUser, userLoading } = useCurrentUser()

  if (userLoading) return <p>Loading...</p>

  return (
    <>
      <h1>Welcome {currentUser?.name || 'no name'} </h1>
      <p>
        Good time to complete hsekpng: - folder structure started it:
        new folder with js file and style components and index.js
        updated backend packages should update fntend pckgs see if
        tests work with comps path module after eslint-config next
        chngs bring evrthng up to speed and move to cart/checkout
        after forms also dont need this page atm actually leave for
        now any selling of items to me from bkend cms
      </p>
    </>
  )
}

export default Account

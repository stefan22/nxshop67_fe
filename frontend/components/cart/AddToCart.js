import { useMutation } from '@apollo/client'
import { currentUserQuery, useCurrentUser } from '../../features/current-user'
import { addToCartMutation } from '../../features/cart'
import { BsCartPlus } from 'react-icons/bs'
import { AddButton } from './Cart.styled'

const AddToCart = ({ id }) => {
  const { user } = useCurrentUser()
  const [addToCart, { loading }] = useMutation(addToCartMutation, {
    variables: { id },
    refetchQueries: [{ query: currentUserQuery }]
  })

  return (
    <>
      {user ? (
        <AddButton disabled={!user} user={user} type="button" onClick={addToCart}>
          Add to {loading && 'ing'} <BsCartPlus />
        </AddButton>
      ) : (
        <AddButton disabled={!user} user={user} type="button" onClick={addToCart}>
          Signin to Add <BsCartPlus />
        </AddButton>
      )}
    </>
  )
}

export default AddToCart

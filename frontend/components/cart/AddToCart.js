import { useMutation } from '@apollo/client'
import { currentUserQuery, useCurrentUser } from '../../features/current-user'
import addToCartMutation from '../../features/cart'
import { BsCartPlus } from 'react-icons/bs'

const AddToCart = ({ id }) => {
  const { user } = useCurrentUser()
  const [addToCart, { loading }] = useMutation(addToCartMutation, {
    variables: { id },
    refetchQueries: [{ query: currentUserQuery }]
  })

  return (
    <button disabled={!user} type="button" onClick={addToCart}>
      Add to {loading && 'ing'} <BsCartPlus />
    </button>
  )
}

export default AddToCart

import UpdateProduct from '../components/UpdateProduct'
const UpdatePage = ({ query }) => {
  let id = query?.id

  return (
    <div className="update-product">
      <h1>Update Product</h1>
      <h3>
        <b>Product id</b>: {id}
      </h3>
      <br />

      <UpdateProduct id={id} />
    </div>
  )
}

export default UpdatePage

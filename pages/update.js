import EditProduct from '@/components/edit-product'
const UpdatePage = ({ query }) => {
  let id = query?.id

  return (
    <div className="update-product">
      <h1>Update Product</h1>
      <h3>
        <b>Product id</b>: {id}
      </h3>
      <br />

      <EditProduct id={id} />
    </div>
  )
}

export default UpdatePage

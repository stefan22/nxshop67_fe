import EditProduct from '@/components/edit-product'
const UpdatePage = ({ query }) => {
  let id = query?.id

  return (
    <div className="update-page">
      <header style={{ marginBottom: '3rem' }}>
        <h1
          style={{
            width: '100%',
            textAlign: 'center',
            padding: 0,
            margin: 0
          }}
        >
          Product Id
        </h1>

        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontSize: '0.87rem',
            color: '#333333',
            fontWeight: 300
          }}
        >
          {id}
        </span>
      </header>
      <EditProduct id={id} />
    </div>
  )
}

export default UpdatePage

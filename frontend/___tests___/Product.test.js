/**
 *  @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import Product from '../components/product/Product'
import currentUserQuery from '../features/current-user/currentUserQuery'

const singleProduct = () => ({
  id: '6314d859a8bf6ce935f288ae',
  description: 'Best of the Rest',
  name: 'Sony SDK',
  price: 27899,
  photo: {
    id: '6314d85ca8bf6ce935f288b3',
    image: {
      publicUrlTransformed: '/product-image.jpg',
      src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    }
  }
})

const userNotSignedIn = [
  {
    request: { query: currentUserQuery },
    result: { data: { authenticatedItem: null } }
  }
]

const product = singleProduct()

describe('Product ', () => {
  let mockedData
  beforeEach(() => {
    mockedData = render(
      <MockedProvider mocks={userNotSignedIn}>
        <Product product={product} />
      </MockedProvider>
    )
  })

  it('renders snapshot correctly', async () => {
    const { container } = mockedData
    expect(container).toBeInTheDocument()
  })

  it('renders product name in page', () => {
    const { container } = mockedData
    const prodName = screen.getByText('Sony SDK')
  })

  it('should render image "src" and "alt" values', () => {
    const { container } = mockedData
    const imgEleObj = screen.queryByTestId('product-image')
    const imgSrcValue = imgEleObj.getAttribute('src')
    const imgAltValue = imgEleObj.getAttribute('alt')
    expect(imgEleObj.alt).toEqual(imgAltValue)
    expect(imgSrcValue).toEqual(product.photo.image.src)
  })
})

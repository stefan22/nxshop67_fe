/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { singleProductQuery } from '../features/single-product'
import { MockedProvider } from '@apollo/react-testing'
import ProductDetails from '../components/product-details'

const singleProduct = () => ({
  id: 'abc123',
  price: '£270',
  user: null,
  name: 'The New Vans',
  description: 'Off the Wall Packs',
  photo: {
    id: 'abc123',
    altText: 'Off the Wall Packs',
    image: {
      publicUrlTransformed: 'vans.jpg'
    }
  }
})

const vans = singleProduct()

const mocks = [
  {
    request: {
      // product request
      query: singleProductQuery,
      variables: {
        id: 'abc123'
      }
    },
    result: {
      data: {
        Product: vans
      }
    }
  }
]

describe('<DetailsItem />', () => {
  it('renders product details data', async () => {
    const { container, debug } = render(
      <MockedProvider mocks={mocks}>
        <ProductDetails product={vans} />
      </MockedProvider>
    )
    await screen.findByTestId('product-details')
    await screen.findByAltText('The New Vans')
    await screen.findByText('The New Vans')
    // product price
    const productPrice = container.querySelector('p')
    expect(productPrice).toHaveTextContent('£270')
    // product image src
    const imageSrc = container.querySelector('img')
    expect(imageSrc).toBeInTheDocument()
    // product
    expect(container).toMatchSnapshot()
  })
})

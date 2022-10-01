/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import Product from '../components/Product'

const singleProduct = () => ({
    id: "abc123",
    price: "£7.70",
    user: null,
    name: "ABC",
    description: "Very nice hat",
    photo: {
        id:"abc123",
        altText: "hat item",
        image: {
            publicUrlTransformed: "item.jpg"
        }
    }
})

const product = singleProduct()

describe("<Product />", () => {

    it("should render product name in page", () => {
        const { container, debug } = render(
          <MockedProvider>
              <Product product={product} />
          </MockedProvider>
        )
        const expectedProductName = screen.getAllByText('ABC')[0]
        expect(expectedProductName).toBeInTheDocument()
    })

    it("should render product description in page", () => {
        const { container, debug } = render(
          <MockedProvider>
              <Product product={product} />
          </MockedProvider>
        )
        const desc = screen.getByText('Very nice hat')
        expect(desc).toBeInTheDocument()
    })

    it("should have an <a /> tag with atributes", () => {
        const { container, debug } = render(
          <MockedProvider>
              <Product product={product} />
          </MockedProvider>
        )
        const linkTag = container.querySelector('a');
        expect(linkTag).toHaveAttribute('href','/product/abc123')
        expect(linkTag).toHaveTextContent(product.name)
    })

    it("should have an image with src and alt attributes", () => {
        const { container, debug } = render(
          <MockedProvider>
              <Product product={product} />
          </MockedProvider>
        )
        const picImg = container.querySelector('picture > img')
        expect(picImg).toHaveAttribute('src','item.jpg')
        expect(picImg).toHaveAttribute('alt','ABC')
    })

    it('product container matches the snapshot', () => {
        const { container } = render(
          <MockedProvider>
              <Product product={product} />
          </MockedProvider>
        )
        expect(container).toMatchSnapshot();
    })
})

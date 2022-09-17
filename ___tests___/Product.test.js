import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import Product from '../components/Product'

const singleProduct = () => ({
    id: "abc123",
    price: "£50.00",
    user: null,
    photo: {
        id: "abc123",
        altText: "dogs are best",
        image: {
            publicUrlTransformed: "dog.jpg"
        }
    },
    name: "Hot hat",
    description: "Very nice hat"
})

const product = singleProduct()

describe("<Product />", () => {

    beforeEach(() => {
        render(
            <MockedProvider>
                <Product product={product} />
            </MockedProvider>
        )
    })

    it("should render product name in page", () => {
        const expectedName = "Hot hat"
        expect(product.name).toEqual(expectedName)
    })
    it("should render product description in page", () => {
        const expectedDesc = "Very nice hat"
        expect(product.description).toEqual(expectedDesc)
    })
    it("should render product price in page", () => {
        const expectedPrice = "£50.00"
        expect(product.price).toEqual(expectedPrice)
    })
    it("should render product id in page", () => {
        const expectedId = "abc123"
        expect(product.id).toEqual(expectedId)
    })
})

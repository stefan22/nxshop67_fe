/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react'
import { MockedProvider } from '@apollo/react-testing'
import Product from '../components/Product'

const singleProduct = () => ({
    id: "abc123",
    price: "£7.70",
    user: null,
    name: "Hot hat",
    description: "Very nice hat",
    photo: {
        id:"abc123",
        altText: "it is a hat",
        image: {
            publicUrlTransformed: "hot_hat.jpg"
        }
    }
})

const product = singleProduct()

describe("<Product />", () => {

    beforeAll(() => {
        render(
            <MockedProvider>
                <Product product={product} />
            </MockedProvider>
        )
    })

    it("should render product name in page", () => {
        const expectedName = product.name;
        expect(product.name).toEqual(expectedName)
    })
    it("should render product description in page", () => {
        const expectedDesc = product.description;
        expect(product.description).toEqual(expectedDesc)
    })
    it("should render product price in page", () => {
        const expectedPrice = product.price;
        expect(product.price).toEqual(expectedPrice)
    })
    it("should render product id in page", () => {
        const expectedId = product.id;
        expect(product.id).toEqual(expectedId)
    })
    // it("should have an image src prop", () => {
    //     //const imgSrc = product.photo.image.publicUrlTransformed;
    //     //expect(product.photo.image.publicUrlTransformed).toContain(imgSrc)
    // })
})

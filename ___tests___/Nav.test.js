/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from "@apollo/react-testing";
import Nav from '../components/Nav'
import { currentUserQuery } from '../graphql/currentUserQuery'

const getUser = () => ({
  id: 12345,
  name: 'Al Capone',
  email: 'capone@gmail.com'
})

const notSignedIn = [
  {
    request: { query: currentUserQuery },
    result: { data: { authenticatedItem: null }},
  }
]

const signedIn = [
  {
    request: { query: currentUserQuery },
    result: { data: { authenticatedItem: getUser()}}
  }
]


describe('Nav menu', () => {

  it('nav menu when user not signed in', () => {
      const { container, debug } = render(
        <MockedProvider mocks={notSignedIn}>
          <Nav />
        </MockedProvider>
      )

      const menuLinks = screen.getByTestId('menu-links');
      const signin = screen.getByText('Signin');
      const products = screen.getByText('Products')

      expect(menuLinks).toBeInTheDocument()
      expect(container).toHaveTextContent('Products')
      expect(container).toHaveTextContent('Signin')
      expect(signin).toHaveAttribute('href', '/signin')
      expect(products).toHaveAttribute('href','/products')
      expect(container).not.toHaveTextContent('Signout')
      expect(container).not.toHaveTextContent('Account')
      expect(container).toMatchSnapshot()
  })

  it('nav menu when user is signed in', async() => {
    const { container, debug } = render(
      <MockedProvider mocks={signedIn}>
        <Nav />
      </MockedProvider>
    )
    const account = await screen.findByText('Account')
    const signout = await screen.findByText('Sign Out')

    expect(container).toHaveTextContent('Account')
    expect(account).toHaveAttribute('href', '/account')
    expect(account).not.toHaveTextContent('href','/order')
    expect(container).not.toHaveTextContent('Signin')
    expect(container).toHaveTextContent('Sign Out')
    expect(signout).not.toHaveAttribute('href','/signout')
    expect(container).toMatchSnapshot();


  })

})

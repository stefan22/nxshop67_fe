/**
 *  @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import currentUserQuery from '../features/current-user/currentUserQuery'
import Nav from '../components/nav/Nav'

const adminUser = () => ({
  __typename: 'User',
  id: '6430b27bfad526e9ece78600',
  name: 'Magnus',
  email: 'magnus1@ethereal.email',
  permissions: ['admin'],
  orders: [],
  cart: []
})

const userNotSignedIn = [
  {
    request: { query: currentUserQuery },
    result: { data: { authenticatedItem: null } }
  }
]

const userSignedIn = [
  {
    request: { query: currentUserQuery },
    result: {
      data: {
        authenticatedItem: adminUser()
      }
    }
  }
]

describe('Nav menu', () => {
  describe('User not signed in', () => {
    let mockdata
    beforeEach(() => {
      mockdata = render(
        <MockedProvider mocks={userNotSignedIn}>
          <Nav />
        </MockedProvider>
      )
      return mockdata
    })

    it('renders correctly snapshot', async () => {
      const { container } = mockdata
      const menuLinks = await screen.getByTestId('menu-links')
      expect(menuLinks).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })

    it('should have "products-signin" links ', async () => {
      const { container } = mockdata
      const signin = screen.getByText('Signin')
      const products = screen.getByText('Products')

      expect(container).toHaveTextContent('Products')
      expect(container).toHaveTextContent('Signin')
      expect(signin).toHaveAttribute('href', '/signin')
      expect(products).toHaveAttribute('href', '/products')
    })

    it('should not have "account-signout" links ', () => {
      const { container } = mockdata
      expect(container).not.toHaveTextContent('Account')
      expect(container).not.toHaveTextContent('Signout')
    })
  })

  describe('User signed in menu', () => {
    it('renders correctly snapshot', async () => {
      const { container, debug } = render(
        <MockedProvider mocks={userSignedIn}>
          <Nav />
        </MockedProvider>
      )
      const menuLinks = await screen.getByTestId('menu-links')
      expect(menuLinks).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })
})

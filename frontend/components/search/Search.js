import { useLazyQuery } from '@apollo/client'
import { resetIdCounter, useCombobox } from 'downshift'
import Image from 'next/image'
import debounce from 'lodash.debounce'
import { useRouter } from 'next/router'
import searchProductsQuery from '../../features/search'
import { SearchContainer, DropDownItem, DropDown } from './Search.styled'

const Search = () => {
  const router = useRouter()
  const [findItems, { loading, data, error }] = useLazyQuery(searchProductsQuery, {
    fetchPolicy: 'no-cache'
  })
  const items = data?.searchTerms || []
  const findDebouncedItems = debounce(findItems, 350)
  resetIdCounter()
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex
  } = useCombobox({
    items,
    onInputValueChange() {
      findDebouncedItems({
        variables: {
          searchTerm: inputValue
        }
      })
    },
    onSelectedItemChange({ selectedItem }) {
      return router.push({
        pathname: `/product/${selectedItem.id}`
      })
    },
    itemToString: item => item?.name || ''
  })
  return (
    <SearchContainer>
      <div {...getComboboxProps}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search for an Item',
            id: 'search',
            className: loading ? 'loading' : null
          })}
        />
      </div>
      <DropDown {...getMenuProps()} id="dropdown">
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              {...getItemProps({ item, index })}
              key={item.id}
              highlighted={index === highlightedIndex}
            >
              <Image
                src={item.photo.image.publicUrlTransformed}
                alt={item.name}
                width="150"
                height="150"
              />
              {item.name}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
        )}
      </DropDown>
    </SearchContainer>
  )
}

export default Search

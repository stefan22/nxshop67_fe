import { paginationQuery } from '../../features/all-products'
const paginationField = () => {
  return {
    keyArgs: false,
    read(existing = [], { args, cache }) {
      // eslint-disable-next-line no-console
      console.log({ existing, args, cache })

      const { skip, first } = args

      // read num of items on the page from cache
      const data = cache.readQuery({
        query: paginationQuery
      })
      const count = data?._allProductsMeta?.count
      const page = skip / first + 1
      const pages = Math.ceil(count / first)

      // check existing items
      const items = existing.slice(skip, skip + first).filter(x => x)
      if (items.length !== first) {
        // no items then go to network
        return false
      }

      // if enough items and last page
      if (items.length && items.length !== first && page === pages) {
        return items
      }

      // if items, return them from cache
      if (items.length) {
        // eslint-disable-next-line no-console
        console.log(`There are ${items.length} items in the cache`)
        return items
      }

      return false //fallback to network
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args
      // eslint-disable-next-line no-console
      console.log(`Merging items from the network ${incoming.length}`)
      const merged = existing ? existing.slice(0) : []
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip]
      }
      // eslint-disable-next-line no-console
      console.log('merged ', merged)
      // return merged items from cache
      return merged
    }
  }
}

export default paginationField

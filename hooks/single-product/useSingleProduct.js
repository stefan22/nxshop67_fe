import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { singleProductQuery } from './singleProductQuery'

export function useSingleProduct(id) {
  const {
    data: singleProduct,
    loading: singleProductLoading,
    error: singleProductError
  } = useQuery(singleProductQuery, {
    variables: {
      id
    }
  })

  return {
    singleProduct,
    singleProductLoading,
    singleProductError
  }
}

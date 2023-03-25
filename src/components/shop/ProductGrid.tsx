import { Grid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import type { FC } from 'react'
import React from 'react'
import type { ProductSimple } from 'types/ProductSimple.type'
import { zoomIn } from 'utils/motion'
import ProductSimpleComponent from './ProductSimpleComponent'

type Props = {
  data: ProductSimple[]
}

const ProductGrid: FC<Props> = ({ data }) => {
  return (
    <Grid
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)'
      ]}
      gap={6}
      p={2}
    >
      {data.map((product, index) => {
        return (
          <motion.div
            key={product.id}
            variants={zoomIn(index * 0.1, 1)}
            initial="hidden"
            whileInView={'show'}
          >
            <ProductSimpleComponent data={product} />
          </motion.div>
        )
      })}
    </Grid>
  )
}

export default ProductGrid

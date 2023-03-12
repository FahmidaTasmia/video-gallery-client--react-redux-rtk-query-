import React from 'react'
import VideGrid from '../Componenets/Grid/VideoGrid'
import Tags from '../Componenets/Tag/Tags'
import Pagination from './../Componenets/ui/Pagination';

function Home() {
  return (
    <>
            <Tags />
            <VideGrid />
            <Pagination />
        </>
  )
}

export default Home

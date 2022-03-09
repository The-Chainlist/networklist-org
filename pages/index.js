import React, { useState } from 'react';
import { withTheme } from '@material-ui/core/styles';
import Chain from '../components/chain'
import classes from './index.module.css'
import useSWR from 'swr'
import Home from '../components/home'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function HomePage({ changeTheme, theme }) {
  const { data, error } = useSWR('https://chainid.network/chains.json', fetcher)
  const [ search, setSearch ] = useState('')

  const onSearchChange = (value) => {
    setSearch(value);
  }
  return (
    <Home changeTheme={changeTheme} theme={theme} onSearchChange={onSearchChange}>
      <div className={ classes.cardsContainer }>
        {/* { hideMultichain === '0' && <MultiChain closeMultichain={ closeMultichain } /> } 
          to use the ad uncomment this expression */}
        {
          data && data.filter((chain) => {
            if(search === '') {
              return true
            } else {
              return (chain.chain.toLowerCase().includes(search.toLowerCase()) ||
              chain.chainId.toString().toLowerCase().includes(search.toLowerCase()) ||
              chain.name.toLowerCase().includes(search.toLowerCase()) ||
              (chain.nativeCurrency ? chain.nativeCurrency.symbol : '').toLowerCase().includes(search.toLowerCase()))
            }
          }).map((chain, idx) => {
            return <Chain chain={ chain } key={ idx } />
          })
        }
      </div>
    </Home>
  )
}

export default withTheme(HomePage)

// export const getStaticProps  = async () => {
//
//   try {
//     const chainsResponse = await fetch('https://chainid.network/chains.json')
//     const chainsJson = await chainsResponse.json()
//
//     return {
//       props: {
//         chains: chainsJson
//       },
//       revalidate: 60,
//     }
//   } catch (ex) {
//     return {
//       props: {
//         chains: []
//       }
//     }
//   }
//
// }

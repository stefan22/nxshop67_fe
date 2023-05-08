import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useCurrentUser } from '../../features/current-user'
import { capitalize } from '../../utils'
import { Items } from './Items'
import {
  AccountContainer,
  AccountGroup,
  AccountBtn,
  AccountBottom,
  H1
} from './Account.styled'
import { GrMoney } from 'react-icons/gr'

const Account = props => {
  const { user } = useCurrentUser()
  let username

  if (user?.name) username = capitalize(user?.name)

  return (
    <>
      <Head>
        <title>NXShop67 - Account:{username}</title>
      </Head>
      <H1>
        Account{' '}
        <GrMoney
          id="gmoney"
          size={24}
          style={{
            stroke: 'red',
            strokeWidth: '1px',
            fillRule: 'evenodd',
            fill: 'grey'
          }}
        />{' '}
        Central
      </H1>

      <h4> Welcome {username}</h4>
      <AccountContainer>
        {Items.map(itm => (
          <AccountGroup key={itm.id}>
            <Image
              width={640}
              height={284}
              layout="intrinsic"
              objectFit="cover"
              loading="lazy"
              src={itm.imageUrl}
              alt={itm.title}
            />
            <AccountBottom>
              <h3>{itm.heading}</h3>
              <p>{itm.description}</p>
              <AccountBtn>
                <Link href={itm.linkTo}>{itm.button}</Link>
              </AccountBtn>
            </AccountBottom>
          </AccountGroup>
        ))}
      </AccountContainer>
    </>
  )
}

export default Account

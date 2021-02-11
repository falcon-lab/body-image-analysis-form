import React from 'react'
import Header from '../src/components/header';
import Container from '../src/components/container';
import HeroPost from '../src/components/hero-post';

import db from '../db.json';

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <HeroPost
          title={db.title}
          subtitle={db.description}
        />
      </Container>
    </>
  )
}

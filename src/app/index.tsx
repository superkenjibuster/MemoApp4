import { Redirect } from 'expo-router'
import React from 'react'

const Index = (): JSX.Element => {
  return <Redirect href = 'auth/sign_up' />
}

export default Index

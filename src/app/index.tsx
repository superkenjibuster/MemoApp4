import { Redirect } from 'expo-router'
import React from 'react'

const Index = (): JSX.Element => {
  return <Redirect href = 'auth/log_in' />
}

export default Index

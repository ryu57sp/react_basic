import React from 'react'
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <a href="/">HelloReact</a>
      <p><a href="/count-up-down">CountUpDown</a></p>
      <p><a href="/sign-up">SignUp</a></p>
    </>
  )
}
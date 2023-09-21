'use client'
import 'semantic-ui-css/semantic.min.css'
import "@/scss/global.scss"
import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Index() {
  return (
    <div>
      <h1>Games Shop</h1>

      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>

    </div>
  );
}

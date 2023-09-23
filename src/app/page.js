'use client'
import 'semantic-ui-css/semantic.min.css'
import "@/scss/global.scss"
import React from 'react'
import { Button } from 'semantic-ui-react'
import { useAuth } from '@/hooks';

export default function Index() {
  const { user, logout } = useAuth()
  console.log("user", user)

  return (
    <div>
      <h1>Games Shop</h1>
      <Button primary> Ir al login</Button>
      {user ? (
        <div>
          <p> Hola , {user.firstname} {user.lastname}</p>
          <Button onClick={logout}> cerrar session </Button>
        </div>
      ) : (
        <div>
          <a href="/join/sign-in"> Iniciar Sesion</a>
        </div>
      )}

    </div>
  );
}

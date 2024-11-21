'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

export const Register = ({ onRegister, onSwitchToLogin }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onRegister(name, phone)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Crear una nueva cuenta</CardTitle>
        <CardDescription>Ingresa tus datos para registrarte</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
          />
          <Input
            type="tel"
            placeholder="Número de teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mb-4"
          />
          <Button type="submit" className="w-full">Registrarse</Button>
        </form>
      </CardContent>
      <CardFooter>
        <Button variant="link" onClick={onSwitchToLogin} className="w-full">
          ¿Ya tienes una cuenta? Inicia sesión
        </Button>
      </CardFooter>
    </Card>
  )
}
      </CardFooter>
    </Card>
  )
}

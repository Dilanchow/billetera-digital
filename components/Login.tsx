import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const Login = ({ onLogin, onSwitchToRegister }) => {
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(phone)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bienvenido a tu Billetera Digital</CardTitle>
        <CardDescription>Ingresa con tu número de teléfono</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            type="tel"
            placeholder="Número de teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mb-4"
          />
          <Button type="submit" className="w-full">Ingresar</Button>
        </form>
      </CardContent>
      <CardFooter>
        <Button variant="link" onClick={onSwitchToRegister} className="w-full">
          ¿No tienes una cuenta? Regístrate
        </Button>
      </CardFooter>
    </Card>
  )
}

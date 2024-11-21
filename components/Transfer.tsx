import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const Transfer = ({ onTransfer, onBack }) => {
  const [toPhone, setToPhone] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onTransfer(toPhone, Number(amount))
    setToPhone('')
    setAmount('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transferir Dinero</CardTitle>
        <CardDescription>Envía dinero a otro número de teléfono</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            type="tel"
            placeholder="Número de teléfono del destinatario"
            value={toPhone}
            onChange={(e) => setToPhone(e.target.value)}
            className="mb-4"
          />
          <Input
            type="number"
            placeholder="Monto a transferir"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-4"
          />
          <Button type="submit" className="w-full mb-2">Transferir</Button>
          <Button onClick={onBack} variant="outline" className="w-full">Volver</Button>
        </form>
      </CardContent>
    </Card>
  )
}

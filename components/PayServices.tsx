import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const PayServices = ({ services, onPayService, onBack }) => {
  const [selectedService, setSelectedService] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onPayService(Number(selectedService), Number(amount))
    setSelectedService('')
    setAmount('')
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pagar Servicios</CardTitle>
        <CardDescription>Selecciona un servicio y el monto a pagar</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Select value={selectedService} onValueChange={setSelectedService}>
            <SelectTrigger className="mb-4">
              <SelectValue placeholder="Selecciona un servicio" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id.toString()}>
                  {service.icon} {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Monto a pagar"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mb-4"
          />
          <Button type="submit" className="w-full mb-2">Pagar</Button>
          <Button onClick={onBack} variant="outline" className="w-full">Volver</Button>
        </form>
      </CardContent>
    </Card>
  )
}

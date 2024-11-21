'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const Dashboard = ({ user, onLogout, onNavigate }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hola, {user.name}</CardTitle>
        <CardDescription>Tu saldo actual es:</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-center">
          ${user.balance.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button onClick={() => onNavigate('transfer')} className="w-full">Transferir</Button>
        <Button onClick={() => onNavigate('payServices')} className="w-full">Pagar Servicios</Button>
        <Button onClick={onLogout} variant="outline" className="w-full">Cerrar Sesión</Button>
      </CardFooter>
    </Card>
  )
}

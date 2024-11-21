'use client'

import { useState } from 'react'
import { Login } from '@/components/Login'
import { Register } from '@/components/Register'
import { Dashboard } from '@/components/Dashboard'
import { Transfer } from '@/components/Transfer'
import { PayServices } from '@/components/PayServices'

// Simulación de una base de datos de usuarios
const users = [
  { phone: '3001234567', name: 'Usuario 1', balance: 1000000 },
  { phone: '3009876543', name: 'Usuario 2', balance: 500000 },
]

// Simulación de servicios disponibles para pagar
const services = [
  { id: 1, name: 'Electricidad', icon: '⚡' },
  { id: 2, name: 'Agua', icon: '💧' },
  { id: 3, name: 'Internet', icon: '🌐' },
  { id: 4, name: 'Gas', icon: '🔥' },
]

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentView, setCurrentView] = useState('login')

  const handleLogin = (phone) => {
    const user = users.find(u => u.phone === phone)
    if (user) {
      setCurrentUser(user)
      setCurrentView('dashboard')
    } else {
      alert('Usuario no encontrado')
    }
  }

  const handleRegister = (name, phone) => {
    if (users.some(u => u.phone === phone)) {
      alert('Este número de teléfono ya está registrado')
    } else {
      const newUser = { name, phone, balance: 0 }
      users.push(newUser)
      setCurrentUser(newUser)
      setCurrentView('dashboard')
    }
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setCurrentView('login')
  }

  const handleTransfer = (toPhone, amount) => {
    const recipient = users.find(u => u.phone === toPhone)
    if (recipient && currentUser.balance >= amount) {
      setCurrentUser({
        ...currentUser,
        balance: currentUser.balance - amount
      })
      alert(`Transferencia de ${amount} realizada a ${recipient.name}`)
    } else {
      alert('Transferencia fallida. Verifica el número y el saldo.')
    }
  }

  const handlePayService = (serviceId, amount) => {
    if (currentUser.balance >= amount) {
      setCurrentUser({
        ...currentUser,
        balance: currentUser.balance - amount
      })
      alert(`Pago de ${amount} realizado por ${services.find(s => s.id === serviceId).name}`)
    } else {
      alert('Pago fallido. Saldo insuficiente.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            {currentView === 'login' && (
              <Login 
                onLogin={handleLogin} 
                onSwitchToRegister={() => setCurrentView('register')}
              />
            )}
            {currentView === 'register' && (
              <Register 
                onRegister={handleRegister}
                onSwitchToLogin={() => setCurrentView('login')}
              />
            )}
            {currentView === 'dashboard' && currentUser && (
              <Dashboard 
                user={currentUser} 
                onLogout={handleLogout}
                onNavigate={setCurrentView}
              />
            )}
            {currentView === 'transfer' && currentUser && (
              <Transfer 
                onTransfer={handleTransfer}
                onBack={() => setCurrentView('dashboard')}
              />
            )}
            {currentView === 'payServices' && currentUser && (
              <PayServices 
                services={services}
                onPayService={handlePayService}
                onBack={() => setCurrentView('dashboard')}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

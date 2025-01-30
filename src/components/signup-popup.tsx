"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function SignupPopup() {
  const [open, setOpen] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    // Mostrar o popup após 10 segundos
    const timer = setTimeout(() => {
      // Verificar se já foi mostrado antes
      const hasSeenPopup = localStorage.getItem("hasSeenSignupPopup")
      if (!hasSeenPopup) {
        setOpen(true)
        localStorage.setItem("hasSeenSignupPopup", "true")
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simular envio do formulário
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setOpen(false)
      // Aqui você adicionaria a lógica real de signup
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crie sua conta gratuita</DialogTitle>
          <DialogDescription>
            Desbloqueie recursos premium e sincronize seus arquivos em todos os dispositivos.
          </DialogDescription>
        </DialogHeader>
        <button
          onClick={() => setOpen(false)}
          className={cn(
            "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background",
            "transition-opacity hover:opacity-100",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "disabled:pointer-events-none",
            "data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
          )}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-4">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Criando conta..." : "Criar conta gratuita"}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Ao criar uma conta, você concorda com nossos{" "}
              <a href="#" className="underline underline-offset-4 hover:text-primary">
                Termos de Serviço
              </a>{" "}
              e{" "}
              <a href="#" className="underline underline-offset-4 hover:text-primary">
                Política de Privacidade
              </a>
              .
            </div>
          </div>
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="w-full">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </Button>
          <Button variant="outline" className="w-full">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"
                fill="#4285F4"
              />
            </svg>
            GitHub
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


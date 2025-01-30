"use client"

import { ArrowLeft } from "lucide-react"
import type { Email } from "@/types/email"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useRouter } from "next/navigation"
import { ScrollArea } from "@/components/ui/scroll-area"

interface EmailViewerProps {
  email: Email
}

export function EmailViewer({ email }: EmailViewerProps) {
  const router = useRouter()

  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">{email.title}</h1>
        </div>
        <div className="flex items-start gap-4">
          <Avatar>
            <AvatarImage src={email.author.avatar} alt={email.author.name} />
            <AvatarFallback>
              {email.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="font-medium">{email.author.name}</p>
            <p className="text-sm text-muted-foreground">{email.author.email}</p>
            <p className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(email.createdAt), {
                addSuffix: true,
                locale: ptBR,
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {email.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[60vh] w-full rounded-md border p-4">
          <div className="prose prose-sm dark:prose-invert max-w-none">{email.content}</div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}


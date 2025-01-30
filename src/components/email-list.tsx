"use client"

import type { Email } from "@/types/email"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useRouter } from "next/navigation"

interface EmailListProps {
  emails: Email[]
}

export function EmailList({ emails }: EmailListProps) {
  const router = useRouter()

  return (
    <div className="space-y-4">
      {emails.map((email) => (
        <Card
          key={email.id}
          className="p-4 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => router.push(`/emails/${email.id}`)}
        >
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
            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{email.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    por {email.author.name} ({email.author.email})
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(email.createdAt), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{email.preview}</p>
              <div className="flex gap-2 pt-2">
                {email.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}


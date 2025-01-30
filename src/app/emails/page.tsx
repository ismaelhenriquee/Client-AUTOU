import { EmailList } from "@/components/email-list"
import { emails } from "@/data/emails" // Simularemos dados por enquanto

export default function EmailsPage() {
  return (
    <div className="container mx-auto py-6 pl-64 pr-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Emails</h1>
          <p className="text-muted-foreground">Gerencie e visualize seus emails</p>
        </div>
      </div>
      <EmailList emails={emails} />
    </div>
  )
}


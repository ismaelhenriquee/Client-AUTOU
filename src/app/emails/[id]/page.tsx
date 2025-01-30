import { notFound } from "next/navigation"
import { EmailViewer } from "@/components/email-viewer"
import { emails } from "@/data/emails" // Simularemos dados por enquanto

interface EmailPageProps {
  params: {
    id: string
  }
}

export default function EmailPage({ params }: EmailPageProps) {
  const email = emails.find((e) => e.id === params.id)

  if (!email) {
    notFound()
  }

  return (
    <div className="container mx-auto py-6 pl-64 pr-4">
      <EmailViewer email={email} />
    </div>
  )
}


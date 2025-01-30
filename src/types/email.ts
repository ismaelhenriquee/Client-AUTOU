export interface Email {
  id: string
  title: string
  preview: string
  content: string
  author: {
    name: string
    email: string
    avatar: string
  }
  tags: string[]
  createdAt: string
}


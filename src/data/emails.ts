import type { Email } from "@/types/email"

export const emails: Email[] = [
  {
    id: "1",
    title: "Relatório de Vendas - Primeiro Trimestre",
    preview:
      "Segue em anexo o relatório detalhado de vendas do primeiro trimestre de 2024. Destaque para o crescimento de 15% em relação ao mesmo período do ano anterior...",
    content: `Prezados,

    Segue em anexo o relatório detalhado de vendas do primeiro trimestre de 2024.

    Principais destaques:
    - Crescimento de 15% em relação ao mesmo período do ano anterior
    - Aumento de 23% na base de clientes
    - Redução de 7% nos custos operacionais

    O desempenho excepcional pode ser atribuído principalmente às seguintes iniciativas:
    1. Lançamento da nova linha de produtos
    2. Expansão para novos mercados
    3. Melhorias no processo de vendas

    [Continua com muito mais conteúdo...]`,
    author: {
      name: "Maria Silva",
      email: "maria.silva@empresa.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Relatório", "Vendas", "Q1"],
    createdAt: "2024-01-30T10:00:00Z",
  },
  {
    id: "2",
    title: "Atualização do Projeto X",
    preview:
      "Informo que as últimas alterações no Projeto X foram implementadas com sucesso. A nova interface está funcionando conforme especificado...",
    content: `Olá time,

    Informo que as últimas alterações no Projeto X foram implementadas com sucesso.

    Atualizações realizadas:
    - Nova interface do usuário
    - Otimização do banco de dados
    - Correção de bugs reportados

    Próximos passos:
    1. Testes de integração
    2. Validação com usuários
    3. Deploy em produção

    [Continua com muito mais conteúdo...]`,
    author: {
      name: "João Santos",
      email: "joao.santos@empresa.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Projeto X", "Desenvolvimento", "Update"],
    createdAt: "2024-01-29T15:30:00Z",
  },
  // Adicione mais emails conforme necessário
]


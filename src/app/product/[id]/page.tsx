import { generateSEO } from '@/components/SEO'
import SchemaMarkup from '@/components/SchemaMarkup'

interface Produto {
  id: string
  nome: string
  descricao: string
  preco: string
  imagem: string
  avaliacao: number
}

async function getProduto(id: string): Promise<Produto> {
  return {
    id,
    nome: 'iPhone 14 Pro',
    descricao:
      'O iPhone 14 Pro vem com uma câmera de 48MP e o novo chip A16 Bionic.',
    preco: 'R$ 9.499,00',
    imagem: '/iphone-14-pr.png',
    avaliacao: 4.9,
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const produto = await getProduto(params.id)
  return generateSEO({
    title: `${produto.nome} - Loja X`,
    description: produto.descricao,
    image: produto.imagem,
  })
}

export default async function ProdutoPage({
  params,
}: {
  params: { id: string }
}) {
  const produto = await getProduto(params.id)

  const schemaProduto = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: produto.nome,
    description: produto.descricao,
    image: produto.imagem,
    offers: {
      '@type': 'Offer',
      price: produto.preco,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: produto.avaliacao.toString(),
      reviewCount: '200',
    },
  }

  return (
    <main className="flex flex-col items-center p-5 bg-gray-100">
      <div className="mb-5">
        <img src={produto.imagem} alt={produto.nome} width={300} />
      </div>
      <div className="text-center">
        <h1 className="text-3xl mb-2">{produto.nome}</h1>
        <p className="text-lg mb-2">{produto.descricao}</p>
        <p className="text-xl text-red-600 mb-2">Preço: {produto.preco}</p>
        <p className="text-lg text-yellow-500">
          Avaliação: {produto.avaliacao} / 5
        </p>
      </div>
      <SchemaMarkup schema={schemaProduto} />
    </main>
  )
}

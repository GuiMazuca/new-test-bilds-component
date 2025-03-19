/* eslint-disable @typescript-eslint/no-explicit-any */
interface SchemaMarkupProps {
  schema: Record<string, any>
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

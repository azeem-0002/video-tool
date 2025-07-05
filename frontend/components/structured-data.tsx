interface StructuredDataProps {
  data?: any[]
}

export function StructuredData({ data }: StructuredDataProps) {
  if (!data || data.length === 0) return null

  return (
    <>
      {data.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  )
}

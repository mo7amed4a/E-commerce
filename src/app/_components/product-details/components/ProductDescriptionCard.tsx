'use client'
import Card from '../../global/Card'
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function ProductDescriptionCard({description}: {description: string}) {
  const source = `## Product Description \n ${description}`;
  return (
    <Card className="border mt-5">
      <div className="card-body">
        <MarkdownPreview source={source} />
      </div>
    </Card>
  )
}

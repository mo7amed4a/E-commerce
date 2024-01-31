'use client'
import Card from '@/components/global/Card';
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function ProductDescriptionCard({description}: {description: string}) {
  const source = `## Product Description \n ${description}`;
  return (
    <Card className="w-full">
      <div className="card-body w-full px-0">
        <MarkdownPreview source={source} />
      </div>
    </Card>
  )
}

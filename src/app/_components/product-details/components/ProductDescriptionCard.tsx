'use client'
import Card from '../../global/Card'
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function ProductDescriptionCard() {
  const source = `
## Product Description Card

> todo: React component preview markdown text.
`;
  return (
    <Card className="border mt-5">
      <div className="card-body">
        <MarkdownPreview source={source} />
      </div>
    </Card>
  )
}

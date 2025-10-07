import CategoryPostList from '@/components/ui/CategoryPostList';

const categories = [
  { key: '개발', label: 'tech' },
  { key: '회고', label: 'review' },
];

export default function Category() {
  return (
    <div className="flex flex-col items-center gap-10 md:px-10 py-3 md:py-5">
      {categories.map(({ key, label }) => (
        <CategoryPostList key={key} category={label} />
      ))}
    </div>
  );
}

import CategoryPostList from '@/components/ui/CategoryPostList';

export default function Category() {
  return (
    <div className="flex flex-col items-center gap-10 md:px-10 py-3 md:py-5">
      <CategoryPostList category="tech" />
      <CategoryPostList category="review" />
    </div>
  );
}

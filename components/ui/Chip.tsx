export default function Chip({ text }: { text: string }) {
  return (
    <div className="flex justify-center items-center px-2 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 text-xs md:text-sm text-gray-600 dark:text-gray-400">
      {text}
    </div>
  );
}

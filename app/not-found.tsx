export default function NotFound() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <p>존재하지 않는 페이지입니다.</p>
      <a href='/' className="px-3 py-2 mt-2 rounded-lg hover:bg-gray-100 transition">홈으로 돌아가기</a>
    </div>
  )
}
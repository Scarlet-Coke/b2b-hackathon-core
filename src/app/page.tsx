export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full bg-slate-50/50 text-slate-900">
      {/* 1. 왼쪽 사이드바 메뉴 */}
      <aside className="hidden w-64 flex-col border-r bg-white p-6 md:flex">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Hackathon<span className="text-blue-600">B2B</span></h2>
        <nav className="mt-8 flex flex-col gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-900 font-medium text-left">Overview Dashboard</button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-left">Smart Contracts</button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 text-left">API Console</button>
        </nav>
      </aside>

      {/* 2. 메인 콘텐츠 영역 */}
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-tight">On-Chain Analytics</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Connect Wallet</button>
        </div>

        {/* 3. 데이터 위젯(카드) 영역 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <p className="text-sm font-medium text-slate-500">Total Transactions</p>
            <div className="text-2xl font-bold mt-2">1,234,567</div>
            <p className="text-xs text-slate-400 mt-1">+20.1% from last month</p>
          </div>
          
          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <p className="text-sm font-medium text-slate-500">Active Wallet Nodes</p>
            <div className="text-2xl font-bold mt-2">+2,350</div>
            <p className="text-xs text-slate-400 mt-1">+180.1% from last month</p>
          </div>

          <div className="p-6 bg-white rounded-xl border shadow-sm">
            <p className="text-sm font-medium text-slate-500">Network Status</p>
            <div className="text-2xl font-bold text-green-600 mt-2">Healthy</div>
            <p className="text-xs text-slate-400 mt-1">99.99% Uptime</p>
          </div>
        </div>
        
        {/* 4. 데이터 테이블 플레이스홀더 */}
        <div className="p-12 bg-white rounded-xl border border-dashed flex items-center justify-center text-slate-400">
          Data Table Placeholder (AI Will Inject Data Here)
        </div>
      </main>
    </div>
  )
}

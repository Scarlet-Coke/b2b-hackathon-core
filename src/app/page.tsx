import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full bg-slate-50/50 text-slate-900">
      {/* 1. 왼쪽 사이드바 메뉴 */}
      <aside className="hidden w-64 flex-col border-r bg-white p-6 md:flex">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Hackathon<span className="text-blue-600">B2B</span></h2>
        <nav className="mt-8 flex flex-col gap-4">
          <Button variant="secondary" className="justify-start">Overview Dashboard</Button>
          <Button variant="ghost" className="justify-start">Smart Contracts</Button>
          <Button variant="ghost" className="justify-start">API Console</Button>
        </nav>
      </aside>

      {/* 2. 메인 콘텐츠 영역 */}
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-tight">On-Chain Analytics</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">Connect Wallet</Button>
        </div>

        {/* 3. 데이터 위젯(카드) 영역 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234,567</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Wallet Nodes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2,350</div>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Network Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Healthy</div>
              <p className="text-xs text-muted-foreground">99.99% Uptime</p>
            </CardContent>
          </Card>
        </div>
        
        {/* 4. 메인 데이터 테이블이 들어갈 빈 공간 */}
        <Card className="p-6 h-64 flex items-center justify-center border-dashed">
          <p className="text-muted-foreground">Data Table Placeholder (AI Will Inject Data Here)</p>
        </Card>
      </main>
    </div>
  )
}

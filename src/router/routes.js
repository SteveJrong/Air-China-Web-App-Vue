import BottomNavigationBar from '@/components/common/BottomNavToolBar' // 底部按钮导航栏

import HomeMainFrame from '@/components/home/base/Home-MainFrame' // 主页
import TicketSearchResultMainFrame from '@/components/ticket-search-result/base/TicketSearchResult-MainFrame' // 机票搜索结果
import FlightDynamicsMainFrame from '@/components/flight-dynamics/base/FlightDynamics-MainFrame' // 航班动态
import MineMainFrame from '@/components/mine/base/Mine-MainFrame' // 我的
import MoreMainFrame from '@/components/more/base/More-MainFrame' // 更多

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomeMainFrame, name: 'Home' }, // 主页

  { path: '/flight-dynamics', component: FlightDynamicsMainFrame, name: 'FlightDynamics' }, // 航班动态

  { path: '/ticket-search-result', component: TicketSearchResultMainFrame, name: 'TicketSearchResult' }, // 机票搜索结果

  { path: '/mine', component: MineMainFrame, name: 'MineMainFrame' }, // 我的

  { path: '/more', component: MoreMainFrame, name: 'MoreMainFrame' } // 更多
]

export default routes
/**
 * State of Vuex
 */

// 声明state状态
const state = {
    bottomNavToolBarState: true, // 主页底部导航工具栏状态
    ticketSearchResultList: [
        {
            "flightBasicInfo": // 航班基本信息
            {
                "flightNumber": "MF8314",  // 航班号
                "airplaneNumber": "738", // 班机型号
                "meals": "正餐", // 可提供的机上餐食
                
                "takeOffTime": "12:55", // 起飞时间
                "takeOffLocation": "北京首都T2", // 起飞地点
                "landTime": "13:30", // 降落时间
                "landLocation": "厦门高崎T1", // 降落地点
                "startingPrice": 925 // 起价
            },

            "priceItemsList": // 机票价格项目列表
            [
                {
                    "type": "限时优惠(K)", // 价格项目类型
                    "score": 872, // 可获积分
                    "price": 925.00 // 机票价格
                },
                {
                    "type": "经济舱全价(Y)", // 价格项目类型
                    "score": 3488, // 可获积分
                    "price": 1760.00 // 机票价格
                },
                {
                    "type": "商务舱优惠(I)", // 价格项目类型
                    "score": "*积分实际累计", // 可获积分
                    "price": 3300.00 // 机票价格
                }
            ]
        },

        {
            "flightBasicInfo": // 航班基本信息
            {
                "flightNumber": "MF8314",  // 航班号
                "airplaneNumber": "738", // 班机型号
                "meals": "点心", // 可提供的机上餐食
                
                "takeOffTime": "22:10", // 起飞时间
                "takeOffLocation": "北京首都T1", // 起飞地点
                "landTime": "23:35", // 降落时间
                "landLocation": "厦门高崎T3", // 降落地点
                "startingPrice": 860 // 起价
            },

            "priceItemsList": // 机票价格项目列表
            [
                {
                    "type": "限时优惠(K)", // 价格项目类型
                    "score": 562, // 可获积分
                    "price": 860.00 // 机票价格
                },
                {
                    "type": "经济舱全价(Y)", // 价格项目类型
                    "score": 3679, // 可获积分
                    "price": 1888.00 // 机票价格
                },
                {
                    "type": "商务舱优惠(I)", // 价格项目类型
                    "score": "*积分实际累计", // 可获积分
                    "price": 4050.00 // 机票价格
                }
            ]
        }

    ]
}

export default state
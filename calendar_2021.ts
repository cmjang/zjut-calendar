import { createEvents, EventAttributes } from 'ics';
import { writeFileSync } from 'fs';
import './utils.js';

let calendar_name = 'zjut';

let events : EventAttributes[] = [{
  title: '所有本科生和在籍研究生开始上课',
  description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 9, 13],
  end: [2021, 9, 14],
  calName: calendar_name
}]
////////////////////////////////////////////////////////////////

/// 2021-2022学年第一学期于2021年9月13日至2022年1月16日，教学周共18周。

for (let i = 0; i < 18; i++) {
  let weekStart = new Date(2021, 8, 13).addWeek(i);
  let weekEnd = new Date(2021, 8, 13).addWeek(i + 1);

  events.push({
    title: `[1] 第 ${i + 1} 周`,
    description: null,
    busyStatus: 'FREE',
    start: weekStart.convertToICSDate(),
    end: weekEnd.convertToICSDate()
  })
}

////////////////////////////////////////////////////////////////

events.push({
  title: '中秋节假期',
  description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 9, 21],
  end: [2021, 9, 22]
})

events.push({
  title: '[中秋调休] 第 3 周周一',
  description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 9, 18],
  end: [2021, 9, 19]
})

events.push({
  title: '[中秋调休] 第 2 周周六',
  description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 9, 20],
  end: [2021, 9, 21]
})




events.push({
  title: '国庆节假期',
  description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 10, 1],
  end: [2021, 10, 4]
})

events.push({
  title: '[国庆调休] 第 5 周周三',
  description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 9, 26],
  end: [2021, 9, 27]
})

events.push({
  title: '[国庆调休] 第 4 周周日',
  description:'时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 10, 6],
  end: [2021, 10, 7]
})

events.push({
  title: '[国庆调休] 第 4 周周六',
  description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 10, 4],
  end: [2021, 10, 5]
})

events.push({
  title: '[国庆调休] 第 5 周周日',
  description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 10, 5],
  end: [2021, 10, 6]
})

events.push({
  title: '[国庆调休] 第 5 周周四',
  description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 10, 9],
  end: [2021, 10, 10]
})

events.push({
  title: '[国庆调休] 第 5 周周六',
  description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
  busyStatus: 'FREE',
  start: [2021, 10, 7],
  end: [2021, 10, 8]
})



events.push({
  title: '校运会',
  description: null,
  busyStatus: 'FREE',
  start: [2021, 10, 28],
  end: [2021, 10, 30]
})

events.push({
  title: '元旦假期',
  description: null,
  busyStatus: 'FREE',
  start: [2022, 1, 1],
  end: [2022, 1, 2]
})

events.push({
  title: '春节假期',
  description: null,
  busyStatus: 'FREE',
  start: [2022, 2, 1],
  end: [2022, 2, 2]
})

events.push({
  title: '考试周',
  description: null,
  busyStatus: 'FREE',
  start: [2022, 1, 3],
  end: [2022, 1, 16]
})

events.push({
  title: '寒假',
  description: '教职工寒假执行学校通知。',
  busyStatus: 'FREE',
  start: [2022, 1, 17],
  end: [2022, 2, 20]
})

////////////////////////////////////////////////////////////////

/// 2021-2022学年第二学期于2022年2月13日至2022年6月18日，教学周共18周。

for (let i = 0; i < 18; i++) {
  let weekStart = new Date(2022, 1, 13).addWeek(i);
  let weekEnd = new Date(2022, 1, 13).addWeek(i + 1);

  events.push({
    title: `[2] 第 ${i + 1} 周`,
    description: null,
    busyStatus: 'FREE',
    start: weekStart.convertToICSDate(),
    end: weekEnd.convertToICSDate()
  })
}

////////////////////////////////////////////////////////////////


events.push({
  title: '第二学期返校注册',
  description: null,
  busyStatus: 'FREE',
  start: [2022, 2, 13],
  end: [2022, 2, 14]
})

events.push({
  title: '第二学期开始上课',
  description: null,
  busyStatus: 'FREE',
  start: [2022, 2, 14],
  end: [2022, 2, 15]
})

events.push({
  title: '清明节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2022, 4, 5],
  end: [2022, 4, 6]
})

events.push({
  title: '劳动节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2022, 5, 1],
  end: [2022, 5, 2]
})

events.push({
  title: '端午节',
  description: '调休细节日后更新',
  busyStatus: 'FREE',
  start: [2022, 6, 3],
  end: [2022, 6, 4]
})

events.push({
  title: '第二学期考试周',
  description: null,
  busyStatus: 'FREE',
  start: [2022, 6, 5],
  end: [2022, 6, 19]
})

////////////////////////////////////////////////////////////////

for (let i = 0; i < 4; i++) {
  let weekStart = new Date(2022, 5, 19).addWeek(i);
  let weekEnd = new Date(2022, 5, 19).addWeek(i + 1);

  events.push({
    title: `[3] 第 ${i + 1} 周`,
    description: null,
    busyStatus: 'FREE',
    start: weekStart.convertToICSDate(),
    end: weekEnd.convertToICSDate()
  })
}

////////////////////////////////////////////////////////////////

// events.push({
//   title: '第三学期',
//   description: null,
//   busyStatus: 'FREE',
//   start: [2021, 6, 19],
//   end: [2022, 7, 17]
// })

events.push({
  title: '暑假',
  description: '教职工暑假执行学校通知',
  busyStatus: 'FREE',
  start: [2022, 7, 17],
  end: [2022, 9, 4]
})


createEvents(events, async (error, value) => {
  if (error) {
    console.log(error);
  }

  writeFileSync(`${__dirname}/${calendar_name}.ics`, value);
})

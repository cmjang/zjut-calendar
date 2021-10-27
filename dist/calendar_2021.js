"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ics_1 = require("ics");
var fs_1 = require("fs");
require("./utils.js");
var calendar_name = 'zjut';
var events = [{
        title: '所有本科生和在籍研究生开始上课',
        description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
        busyStatus: 'FREE',
        start: [2021, 9, 13],
        end: [2021, 9, 14],
        calName: calendar_name
    }];
////////////////////////////////////////////////////////////////
/// 2021-2022学年第一学期于2021年9月13日至2022年1月16日，教学周共18周。
for (var i = 0; i < 18; i++) {
    var weekStart = new Date(2021, 8, 13).addWeek(i);
    var weekEnd = new Date(2021, 8, 13).addWeek(i + 1);
    events.push({
        title: "[1] \u7B2C " + (i + 1) + " \u5468",
        description: null,
        busyStatus: 'FREE',
        start: weekStart.convertToICSDate(),
        end: weekEnd.convertToICSDate()
    });
}
////////////////////////////////////////////////////////////////
events.push({
    title: '中秋节假期',
    description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
    busyStatus: 'FREE',
    start: [2021, 9, 21],
    end: [2021, 9, 22]
});
events.push({
    title: '[中秋调休] 第 3 周周一',
    description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
    busyStatus: 'FREE',
    start: [2021, 9, 18],
    end: [2021, 9, 19]
});
events.push({
    title: '[中秋调休] 第 2 周周六',
    description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
    busyStatus: 'FREE',
    start: [2021, 9, 20],
    end: [2021, 9, 21]
});
events.push({
    title: '国庆节假期',
    description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
    busyStatus: 'FREE',
    start: [2021, 10, 1],
    end: [2021, 10, 4]
});
events.push({
    title: '[国庆调休] 第 5 周周三',
    description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
    busyStatus: 'FREE',
    start: [2021, 9, 26],
    end: [2021, 9, 27]
});
events.push({
    title: '[国庆调休] 第 4 周周日',
    description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
    busyStatus: 'FREE',
    start: [2021, 10, 6],
    end: [2021, 10, 7]
});
events.push({
    title: '[国庆调休] 第 4 周周六',
    description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
    busyStatus: 'FREE',
    start: [2021, 10, 4],
    end: [2021, 10, 5]
});
events.push({
    title: '[国庆调休] 第 5 周周日',
    description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
    busyStatus: 'FREE',
    start: [2021, 10, 5],
    end: [2021, 10, 6]
});
events.push({
    title: '[国庆调休] 第 5 周周四',
    description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
    busyStatus: 'FREE',
    start: [2021, 10, 9],
    end: [2021, 10, 10]
});
events.push({
    title: '[国庆调休] 第 5 周周六',
    description: '时间具体见：http://www.zjut.edu.cn/newsDetail.jsp?id=23420',
    busyStatus: 'FREE',
    start: [2021, 10, 7],
    end: [2021, 10, 8]
});
events.push({
    title: '校运会',
    description: null,
    busyStatus: 'FREE',
    start: [2021, 10, 28],
    end: [2021, 10, 30]
});
events.push({
    title: '元旦假期',
    description: null,
    busyStatus: 'FREE',
    start: [2022, 1, 1],
    end: [2022, 1, 2]
});
events.push({
    title: '春节假期',
    description: null,
    busyStatus: 'FREE',
    start: [2022, 2, 1],
    end: [2022, 2, 2]
});
events.push({
    title: '考试周',
    description: null,
    busyStatus: 'FREE',
    start: [2022, 1, 3],
    end: [2022, 1, 16]
});
events.push({
    title: '寒假',
    description: '教职工寒假执行学校通知。',
    busyStatus: 'FREE',
    start: [2022, 1, 17],
    end: [2022, 2, 20]
});
////////////////////////////////////////////////////////////////
/// 2021-2022学年第二学期于2022年2月13日至2022年6月18日，教学周共18周。
for (var i = 0; i < 18; i++) {
    var weekStart = new Date(2022, 1, 13).addWeek(i);
    var weekEnd = new Date(2022, 1, 13).addWeek(i + 1);
    events.push({
        title: "[2] \u7B2C " + (i + 1) + " \u5468",
        description: null,
        busyStatus: 'FREE',
        start: weekStart.convertToICSDate(),
        end: weekEnd.convertToICSDate()
    });
}
////////////////////////////////////////////////////////////////
events.push({
    title: '第二学期返校注册',
    description: null,
    busyStatus: 'FREE',
    start: [2022, 2, 13],
    end: [2022, 2, 14]
});
events.push({
    title: '第二学期开始上课',
    description: null,
    busyStatus: 'FREE',
    start: [2022, 2, 14],
    end: [2022, 2, 15]
});
events.push({
    title: '清明节',
    description: '调休细节日后更新',
    busyStatus: 'FREE',
    start: [2022, 4, 5],
    end: [2022, 4, 6]
});
events.push({
    title: '劳动节',
    description: '调休细节日后更新',
    busyStatus: 'FREE',
    start: [2022, 5, 1],
    end: [2022, 5, 2]
});
events.push({
    title: '端午节',
    description: '调休细节日后更新',
    busyStatus: 'FREE',
    start: [2022, 6, 3],
    end: [2022, 6, 4]
});
events.push({
    title: '第二学期考试周',
    description: null,
    busyStatus: 'FREE',
    start: [2022, 6, 5],
    end: [2022, 6, 19]
});
////////////////////////////////////////////////////////////////
for (var i = 0; i < 4; i++) {
    var weekStart = new Date(2022, 5, 19).addWeek(i);
    var weekEnd = new Date(2022, 5, 19).addWeek(i + 1);
    events.push({
        title: "[3] \u7B2C " + (i + 1) + " \u5468",
        description: null,
        busyStatus: 'FREE',
        start: weekStart.convertToICSDate(),
        end: weekEnd.convertToICSDate()
    });
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
});
(0, ics_1.createEvents)(events, function (error, value) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (error) {
            console.log(error);
        }
        (0, fs_1.writeFileSync)(__dirname + "/" + calendar_name + ".ics", value);
        return [2 /*return*/];
    });
}); });

Date.prototype.convertToICSDate = function () {
    var year = this.getFullYear();
    var month = this.getMonth() + 1;
    var date = this.getDate();
    return [year, month, date];
};
Date.prototype.addDay = function (i) {
    return new Date(this.getTime() + i * 86400 * 1000);
};
Date.prototype.addWeek = function (i) {
    return this.addDay(i * 7);
};

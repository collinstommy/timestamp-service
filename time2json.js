
var moment = require('moment');

module.exports = function(input)
{
    var date = moment(input, ['X', 'MMMM D, YYYY'], true);
    console.log(date);

    if(date.isValid()){
         return {unix : date.unix(), natural: date.format("MMMM D, YYYY") };
    }
    return { unix : null, natural : null };
};

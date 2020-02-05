jQuery.extend(jQuery.fn.dataTableExt.oSort, {
    "ddduration-pre": function (data) {
        var sp = ("" + data).trim().split(":");

        var ret = 0;
        if (sp.length > 0) {
            for (var i = 0; i < sp.length; ++i) {
                ret += parseInt(sp[sp.length - i - 1]) * Math.pow(60, i);
            }
        }
        return ret;
    },

    "ddduration-asc": function ( b, a ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    },

    "ddduration-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});
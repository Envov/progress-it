"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ifElse = void 0;
var ifElse = function (fn1, fn2, fn3) {
    return function (x) {
        return fn1(x) ? fn2(x) : fn3(x);
    };
};
exports.ifElse = ifElse;
var progress = function (effect) { return function (state, option) {
    var $data = __assign(__assign({ percent: 0, interval: 100, speed: 0.1 }, option), { timeLine: 0, timer: undefined });
    // get timer or effect's returns
    var $stateInitFlow = function ($data) {
        return (0, exports.ifElse)(function (state) { return Boolean(state); }, function (state) { return effect(1, state); }, function (state) {
            return setInterval(function () {
                $data.timeLine++;
                $data.percent = state ? 1.0 : (-1 / ($data.speed * $data.timeLine + 1) + 1) * 1;
                effect($data.percent, state);
            }, $data.interval);
        });
    };
    // begging ..
    $data.timer = $stateInitFlow($data)(state);
    var setter = function (newState) {
        if (newState) {
            $data.timer && clearInterval($data.timer);
            $data.percent = 1;
            effect($data.percent, newState);
        }
        return setter;
    };
    return setter;
}; };
exports.default = progress;

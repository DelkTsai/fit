'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitTable = require('fit-table');

var _fitTable2 = _interopRequireDefault(_fitTable);

var _fitButton = require('fit-button');

var _fitButton2 = _interopRequireDefault(_fitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var info = {
    fields: [{
        key: 'value',
        value: '元字符'
    }, {
        key: 'description',
        value: '描述'
    }],
    get: {
        url: '/api/table/regex',
        method: 'get',
        beforeSend: function beforeSend(info, currentPage) {
            info.page = currentPage;
            return info;
        },
        success: function success(res, pagination) {
            pagination.next = res['has_next'];
            return res['data'];
        }
    },
    selector: {
        type: 'checkbox'
    },
    extend: function extend(table) {
        var handleClick = function handleClick() {
            console.log(table.getCurrentSelectRows());
        };

        var jumpHome = function jumpHome() {
            table.jump(table.currentPage());
        };

        function Delete() {
            var currentSelectRows = table.getCurrentSelectRows();
            table.mockDeleteData(currentSelectRows);

            setTimeout(function () {
                console.log(table.getData());
            });
        }

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                _fitButton2.default,
                { type: 'success',
                    onClick: handleClick },
                '获取选中'
            ),
            _react2.default.createElement(
                _fitButton2.default,
                { style: { marginLeft: 10 },
                    type: 'primary',
                    onClick: jumpHome },
                '刷新'
            ),
            _react2.default.createElement(
                _fitButton2.default,
                { onClick: Delete },
                '模拟删除'
            )
        );
    }
};

var Demo = (function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
        _classCallCheck(this, Demo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
    }

    _createClass(Demo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_fitTable2.default, info);
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;
/**
 * @file API层例子。
 *  sample url : http://127.0.0.1:3000/test.json?param1=1&param2=2
 * @author r2space@gmail.com
 * @copyright Dreamarts Corporation. All Rights Reserved.
 */

"use strict";

var smart     = require("smartcore")
  , context   = smart.core.context
  , log       = smart.core.log
  , response  = smart.core.response
  , test      = require("../controllers/ctrl_test");

/**
 * 获取用户列表。负责做3件事
 *  1. 转换参数
 *  2. 调用ctrl层
 *  3. 返回结果
 * @param req 请求对象
 * @param res 响应对象
 * @returns {*} 无
 */
exports.getUserList = function(req, res) {

  log.operation("begin: get user list.");

  // 转换参数，生成context实例
  var handler = new context().bind(req, res);

  // 调用ctrl层业务逻辑
  test.run(handler, function(err, result) {

    log.operation("finish: get user list.");

    // 返回结果
    return response.send(res, err, result);
  });
};

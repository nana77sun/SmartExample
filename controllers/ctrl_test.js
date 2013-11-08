/**
 * @file Controller层例子。
 * @author r2space@gmail.com
 * @copyright Dreamarts Corporation. All Rights Reserved.
 */

"use strict";

var _         = require('underscore')
  , check     = require('validator').check
  , smart     = require("smartcore")
  , errors    = smart.core.errors
  , log       = smart.core.log;

exports.run = function(handler, callback) {

  // 输出DebugLog
  log.debug("param param1 : " + handler.params.param1);
  log.debug("param param2 : " + handler.params.param2);

  // 校验参数
  try {

    check(handler.params.param1, __("js.ctr.check.test")).notEmpty();
  } catch (e) {
    return callback(new errors.BadRequest(e.message));
  }

  return callback(null, "ok");
};

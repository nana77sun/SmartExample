
/**
 * Module dependencies.
 */

var express     = require("express")
  , http        = require("http")
  , path        = require("path")
  , config      = require("config")
  , smart       = require("smartcore")
  , middleware  = smart.core.middleware
  , loader      = smart.core.loader
  , log         = smart.core.log
  , routes      = require("./routes");

/** 初始化smart core依赖的服务 */
loader.initialize();

var app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser("your secret here"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));
app.engine("html", require("ejs").__express);

// development only
if ("development" == app.get("env")) {
  app.use(express.errorHandler());
}

// middleware处理
app.use(middleware.lang);         // 设定语言

app.get("/", routes.index);
app.get("/test.json", routes.test);

/**
 * 启动服务
 */
http.createServer(app).listen(app.get("port"), function(){
  log.info("Express server listening on port " + app.get("port"));
});

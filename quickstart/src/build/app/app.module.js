"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./component/home.component");
var aboutUs_component_1 = require("./component/aboutUs.component");
var contactUs_component_1 = require("./component/contactUs.component");
var news_component_1 = require("./component/news.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about-us', component: aboutUs_component_1.AboutUsComponent },
    { path: 'contact-us', component: contactUs_component_1.ContactUsComponent },
    { path: 'news', component: news_component_1.NewsComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, aboutUs_component_1.AboutUsComponent, contactUs_component_1.ContactUsComponent, news_component_1.NewsComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
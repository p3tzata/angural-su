import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./jwt.interceptor";
import { UrlAppandInterceptor } from "./url-appand.interceptor";

//Explain: we use this barrel to merge all interceptors, thus we don't need to modify app.module about future created interceptors. 
export const wshTaskInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UrlAppandInterceptor, multi: true },
  ];
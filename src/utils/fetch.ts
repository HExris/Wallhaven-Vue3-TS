
import "whatwg-fetch";

/**
 * @description: 枚举出请求数据格式类型
 * @param {type} 枚举类型
 * @return: 
 */
enum ContentType {
    json = 'application/json;charset=UTF-8',
    form = 'application/x-www-form-urlencoded; charset=UTF-8'
}

/**
 * @description: 枚举request请求的method方法
 * @param {type} 枚举类型
 * @return: 
 */
enum HttpMethod {
    get = 'GET',
    post = 'POST'
}

/**
 * @description: 声明请求头header的类型
 * @param {type} 
 * @return: 
 */
interface Header {
    Accept?: string;
    'Content-Type': string;
    [propName: string]: any;
}

interface Http {
    get<R, P = {}>(url: string, params?: P, options?: RequestInit): Promise<R>;
    post<R, P = {}>(url: string, params?: P): Promise<R>;
}

export default class HttpRequests implements Http {
    public handleUrl = (url: string) => (params: any): string => {
        if (params) {
            const paramsArray: any[] = [];
            Object.keys(params).forEach((key) =>
                paramsArray.push(key + "=" + encodeURIComponent(params[key]))
            );
            if (url.search(/\?/) === -1) {
                typeof params === "object" ? (url += "?" + paramsArray.join("&")) : url;
            } else {
                url += "&" + paramsArray.join("&");
            }
        }
        return url;
    }

    public async get<R, P = {}>(url: string, params?: P, options?: RequestInit): Promise<R> {
        options = {
            method: HttpMethod.get,
            credentials: 'include',
            headers: {
                'Content-Type': ContentType.json
            }
        }
        return await fetch(this.handleUrl(url)(params), options)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("服务器繁忙，请稍后再试！");
                }
            })
            .then<R>((response) => {
                // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
                if (response) {
                    return response;
                } else {
                    // 非 200，错误处理
                    return response;
                }
            })
            .catch<R>((error) => {
                return error;
            });
    }

    public async post<R, P = { string?: any }>(url: string, params?: P): Promise<R> {
        const queryString = JSON.stringify(params)

        const options: RequestInit = {
            method: HttpMethod.post,
            credentials: 'include',
            headers: {
                'Content-Type': ContentType.json
            },
            body: queryString
        }
        return await fetch(url, options)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    // alert("服务器繁忙，请稍后再试；\r\nCode:" + response.status);
                }
            })
            .then((response) => {
                // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
                return response;
            })
            .catch((error) => {
                // alert("当前网络不可用，请检查网络设置！");
                return error;
            });
    }
}
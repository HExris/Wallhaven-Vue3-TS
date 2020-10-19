declare namespace http {
    interface base {
        statusCode: number;
        url: string;
        body: object;
        headers: object;
    }
    interface request extends base {
        
    }
    interface response extends base {
        success: boolean;
        data?: any;
        msg: string;
    }
}

const http = {
    base: {
        
    }
}
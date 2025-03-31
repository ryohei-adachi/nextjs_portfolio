import { createClient } from "microcms-js-sdk";


if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICRO_SERVICE_DOMAIN is required");
}

if(!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is requires")
}

//SDKに用意されているcreateClient関数を使って、クライアントを作成する
const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});


//全ニュースをCMSから取得する関数
export const getAllNewsList = async () => {
    const listData = await client.getAllContents({
        endpoint: "news",
    });
    return listData;
}
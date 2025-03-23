"use server";

//メールアドレスの形式をチェックする関数
function validateEmail(email) {
    const pattern = /^[^¥s@]+@[^¥s@]+\.[^¥s@]+$/;
    return pattern.test(email);
}

export async function createContactData(_prevState, formData) {
    
    //formのname属性からフォームデータを取得する
    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    }
    
    //名前が未入力の場合、エラーを表示する
    if (!rawData.name) {
        return {
            status: "error",
            message: "名前を入力してください",
        };
    }
    //メールアドレスが未入力の場合、エラーを表示する
    if (!rawData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください",
        };
    }

    //メールアドレスの形式が誤っている場合、エラーを表示する
    if (!validateEmail(rawData.email)) {
        return {
            status: "error",
            message: "メールアドレスの形式が誤っています",
        }
    }

    //メッセージが未入力の場合、エラーを表示する
    if (!rawData.message) {
        return {
            status: "error",
            message: "メッセージを入力してください",
        };
    }

    return { status: "success", message: "OK"};
}
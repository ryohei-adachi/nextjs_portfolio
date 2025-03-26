"use server";

//メールアドレスの形式をチェックする関数
function validateEmail(email) {
    const pattern = /^[^¥s@]+@[^¥s@]+\.[^¥s@]+$/;
    return pattern.test(email);
}

export async function createContactData(_prevState, formData) {
    
    //formのname属性からフォームデータを取得する
    const rawFormData = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message")
    }
    
    //名前が未入力の場合、エラーを表示する
    if (!rawFormData.name) {
        return {
            status: "error",
            message: "名前を入力してください",
        };
    }
    //メールアドレスが未入力の場合、エラーを表示する
    if (!rawFormData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください",
        };
    }

    //メールアドレスの形式が誤っている場合、エラーを表示する
    if (!validateEmail(rawFormData.email)) {
        return {
            status: "error",
            message: "メールアドレスの形式が誤っています",
        }
    }

    //メッセージが未入力の場合、エラーを表示する
    if (!rawFormData.message) {
        return {
            status: "error",
            message: "メッセージを入力してください",
        };
    }

    const result = await fetch (
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fields: [
                    {
                        objectTypeId: "0-1",
                        name: "firstname",
                        value: rawFormData.name,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: rawFormData.email,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "message",
                        value: rawFormData.message,
                    }
                ],
            })
        }
    );

    try {
        await result.json();
    }
    catch(e) {
        console.log(e);
        return {
            status: "error",
            message: "お問い合わせに失敗しました。"
        }
    }

    return { status: "success", message: "OK"};
}

// Các hàm để thao tác với localStorage
const getDataTextStorage = (storeName: string): string | null => {
    if (localStorage.getItem(storeName)) {
        return localStorage.getItem(storeName);
    }
    return null;
}

const getDataJsonStorage = (storeName: string): any | null => {
    if (localStorage.getItem(storeName)) {
        return JSON.parse(localStorage.getItem(storeName) as string);
    }
    return null;
}

const setDataTextStorage = (storeName: string, data: string): void => {
    localStorage.setItem(storeName, data);
}

const setDataJsonStorage = (storeName: string, data: any): void => {
    localStorage.setItem(storeName, JSON.stringify(data));
}

// Các hàm để thao tác với cookie
function setCookie(name: string, value: string, days: number): void {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function delCookie(name: string): void {   
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export { setCookie, getCookie, delCookie, getDataTextStorage, getDataJsonStorage, setDataTextStorage, setDataJsonStorage }

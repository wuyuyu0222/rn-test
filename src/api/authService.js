export const authService = {
    login(username, password) {
        return new Promise((resolve, reject) => {
            if (!username || !password) {
                reject()
            }
            resolve()
        })
    }
}
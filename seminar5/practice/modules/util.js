module.exports = {
    success: (status, message, data) => { //status는 상태 코드 - 200
        return {
            status: status,
            success: true,
            message: message,
            data: data
        }
    },
    fail: (status, message) => { //status는 상태 코드 - 400
        return {
            status: status,
            success: false,
            message: message
        }
    },
};
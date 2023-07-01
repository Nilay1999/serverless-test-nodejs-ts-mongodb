export const hello = async () => {
    try {
        const response = {
            statusCode: 200,
            body: 'HELLO YOU ARE MY FRIEND!!!',
        };
        return response;
    } catch (err) {
        return {
            statusCode: 500,
            body: 'An error occured',
        };
    }
};

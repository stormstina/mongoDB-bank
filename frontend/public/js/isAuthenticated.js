export const isAuthenticated = async () => {
    try {
        const res = await fetchData("/api/user/active");
        console.log(res);
        return res.acknowledged;
    } catch (error) {
        console.log(error);
    }
};

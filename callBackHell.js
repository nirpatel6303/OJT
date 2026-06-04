const getUser = (userId, fn) => {
    console.log("getting user");
    fn();
}

const getOrder = (user, fn) => {
    console.log(`${user} getting order`);
    fn()
}

const getPayment = (order, fn) => {
    console.log(`${order} list is send to email`);
    fn();
}

const getEmail = (payment, fn) => {
    console.log("Nick22022006@gmail.com");
    fn();
}
export default function callBack() {
    getUser("1", (user = "neer") => {
        getOrder(user, (order = "samosa") => {
            getPayment(order, (payment = 100) => {
                getEmail(payment, () => {
                    console.log("payment confirm")
                });
            });
        });
    });
}
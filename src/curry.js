const curry = func => {
    let args = [];
    const curried = (...args2) => {
        args = [...args, ...args2];

        if (func.length === 0 && args2.length > 0) {
            return curried;
        }
        if (func.length > 0 && func.length > args.length) {
            return curried;
        }
        return func(...args);
    }
    return curried;
}

export default curry;

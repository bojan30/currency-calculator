export const convert = (data, from, to, quantity) => {
    return quantity * (data[`USD${to}`] / data[`USD${from}`]);
}
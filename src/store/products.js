const products = [
    {
        name: "Example Product",
        description: "Example description",
        price: "$25.99",
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    },
    {
        name: "Example Product",
        description: "Example description",
        price: "$25.99",
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    },
    {
        name: "Example Product",
        description: "Example description",
        price: "$25.99",
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    },
    {
        name: "Example Product",
        description: "Example description",
        price: "$25.99",
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
    },
    {
        name: "Example Product",
        description: "Example description",
        price: "$25.99",
        image: "https://images.unsplash.com/photo-1600269452121"}
];

const getProducts = (number) => {
    let ret = [];
    for (let i = 0; i < number; i++) {
        ret.push({
            name: "Example Product",
            description: "Example description",
            price: "$25.99",
            image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
        });
    }
    return ret;
};

export default getProducts;
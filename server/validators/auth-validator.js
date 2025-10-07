const {z} = require("zod");

// creating anobject Schema
const singupSchema = z.object({
    username: z.string({
        require_error: "Name is require"}).trim().min(3, {message: "Name must be at lest of 3chats."
    }).max(255, {
        message: "Name must be at lest of 255 chats."
    }),

    email: z.string({
        require_error: "email is require"}).trim().email({message: "Invalid email address."
    }).min(3, {
        message: "Name must be at lest of 3chats."
    }).max(255, {
        message: "Name must be at lest of 255 chats."
    }),

    phone: z.string({
        require_error: "phone is require"}).trim().min(10, {
        message: "phone must be at lest of 10chats."
    }).max(20, {
        message: "phone must be at lest of 20 chats."
    }),

    password: z.string({
        require_error: "password is require"}).min(7, {
        message: "password must be at lest of 7chats."
    }).max(1024, {
        message: "password must be at lest of 1024 chats."
    })
});

module.exports = singupSchema;
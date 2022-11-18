"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const cats_1 = __importDefault(require("./routes/cats"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    origin: config_1.default.cors,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-type', 'Accept'],
}));
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.log(err);
    res.status(status).send(message);
});
app.use(cats_1.default);
exports.default = app;

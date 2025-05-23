"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appRouter_1 = __importDefault(require("./routes/appRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((err, req, res, next) => {
    console.error('GLOBAL ERROR HANDLER:', err);
    res.status(500).json({
        message: 'Something went wrong',
        error: err.message || 'Unknown Error',
    });
});
app.use('/api', appRouter_1.default);
app.get('/ping', (req, res) => {
    res.json({
        message: 'pong',
        server: 'live'
    });
});
app.listen(3001, () => console.log('server is running on port 3001'));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    catApiKey: process.env.APIKEY || null,
    port: process.env.API_PORT || '3001',
    cors: process.env.CORS || 'localhost:3000'
};
exports.default = config;

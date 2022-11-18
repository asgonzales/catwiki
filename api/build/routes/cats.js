"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
axios_1.default.defaults.headers.common['x-api-key'] = config_1.default.catApiKey;
const catRoutes = (0, express_1.Router)();
//Obtener una imagen aleatoria
catRoutes.get('/image', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, axios_1.default)({
            method: 'GET',
            url: 'https://api.thecatapi.com/v1/images/search',
        });
        res.status(200).json(response.data);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
//Obtener las razas
catRoutes.get('/breeds', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, axios_1.default)({
            method: 'GET',
            url: 'https://api.thecatapi.com/v1/breeds'
        });
        const breeds = response.data.map((element) => {
            return {
                id: element.id,
                name: element.name
            };
        });
        res.status(200).json(breeds);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
//Obtener detalles de una raza
catRoutes.get('/breed/:breedId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { breedId } = req.params;
        const response = yield (0, axios_1.default)({
            method: 'GET',
            url: `https://api.thecatapi.com/v1/breeds/${breedId}`
        });
        let details = {
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
            weight: response.data.weight.metric,
            temperament: response.data.temperament,
            origin: response.data.origin,
            life_span: response.data.life_span,
            stats: {
                adaptability: response.data.adaptability,
                affection: response.data.affection_level,
                child: response.data.child_friendly,
                dog: response.data.dog_friendly,
                intelligence: response.data.intelligence,
                health_issues: response.data.health_issues,
                social_needs: response.data.social_needs,
                energy: response.data.energy_level,
            },
            image: (_a = response.data.image) === null || _a === void 0 ? void 0 : _a.url,
            wikipedia: response.data.wikipedia_url
        };
        const responseImage = yield (0, axios_1.default)({
            method: 'GET',
            url: `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&size=med`
        });
        details.image = responseImage.data[0].url;
        res.status(200).json(details);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
//Obtener imagenes de una raza
catRoutes.get('/image/:breed', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { breed } = req.params;
        const { page } = req.query;
        const response = yield (0, axios_1.default)({
            method: 'GET',
            url: `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=15&order=asc&page=${page || 1}`
        });
        const images = response.data.map((element) => {
            return {
                url: element.url
            };
        });
        res.status(200).json(images);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
//Obtener categorias
catRoutes.get('/categories', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, axios_1.default)({
            method: 'GET',
            url: 'https://api.thecatapi.com/v1/categories'
        });
        let categories = [...response.data];
        for (let i = 0; i < categories.length; i++) {
            const url = yield (0, axios_1.default)({
                method: 'GET',
                url: `https://api.thecatapi.com/v1/images/search?category_ids=${categories[i].id}`
            });
            console.log(url.data[0].url);
            categories[i] = Object.assign(Object.assign({}, categories[i]), { image: url.data[0].url });
        }
        res.status(200).json(categories);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
//Obtener imagenes de una categoria
catRoutes.get('/categorie/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { page } = req.query;
        const response = yield (0, axios_1.default)({
            method: 'GET',
            url: `https://api.thecatapi.com/v1/images/search?category_ids=${id}&limit=10&order=asc&page=${page || 1}`
        });
        const images = response.data.map((element) => {
            return {
                url: element.url
            };
        });
        res.status(200).json(images);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}));
exports.default = catRoutes;

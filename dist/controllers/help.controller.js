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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTeapot = exports.getRepairBay = exports.getStatus = void 0;
const getStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.json({
            damaged_systems: "navigation",
        });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.getStatus = getStatus;
const getRepairBay = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Repair</title>
        </head>
        <body>
        <div class="anchor-point">NAV-01</div>
        </body>
        </html>
    `);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.getRepairBay = getRepairBay;
const postTeapot = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.sendStatus(418);
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.postTeapot = postTeapot;

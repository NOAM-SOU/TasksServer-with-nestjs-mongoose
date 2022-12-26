"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePass = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}
exports.hashPassword = hashPassword;
async function comparePass(password, hashPassword) {
    return await bcrypt.compare(password, hashPassword);
}
exports.comparePass = comparePass;
//# sourceMappingURL=auth.tools.js.map
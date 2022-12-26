"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
async function getUser(user) {
    return await {
        id: user._id,
        name: user.name,
        email: user.email,
    };
}
exports.getUser = getUser;
//# sourceMappingURL=user.tools.js.map
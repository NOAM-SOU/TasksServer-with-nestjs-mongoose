"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const auth_tools_1 = require("../tools/auth.tools");
const jwt_1 = require("@nestjs/jwt");
const user_tools_1 = require("../tools/user.tools");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register(user) {
        const existitngUser = await this.userService.readOne(user.email);
        if (existitngUser)
            throw new Error('User already exists');
        const hashedPassword = await (0, auth_tools_1.hashPassword)(user.password);
        const newUser = await this.userService.create(user, hashedPassword);
        const jwt = await this.jwtService.signAsync(await (0, user_tools_1.getUser)(newUser));
        return { token: jwt };
    }
    async login(user) {
        const userExisting = await this.userService.readOne(user.email);
        console.log(userExisting);
        if (!user)
            throw new Error('User not found');
        const passMatch = await (0, auth_tools_1.comparePass)(user.password, userExisting.password);
        if (!passMatch)
            throw new Error('Wrong password');
        const jwt = await this.jwtService.signAsync(await (0, user_tools_1.getUser)(userExisting));
        return { token: jwt };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
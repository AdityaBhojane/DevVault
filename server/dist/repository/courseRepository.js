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
exports.courseRepository = void 0;
const prisma_1 = require("../config/prisma");
// this CRUD repeated can be avoided!, i writing this to have some practice around prisma
exports.courseRepository = {
    createCourse: (data) => __awaiter(void 0, void 0, void 0, function* () { return prisma_1.prisma.course.create({ data }); }),
    updateCourse: (data, id) => __awaiter(void 0, void 0, void 0, function* () { return prisma_1.prisma.course.update({ where: { id: id }, data }); }),
    getCourse: (id) => __awaiter(void 0, void 0, void 0, function* () { return prisma_1.prisma.course.findUnique({ where: { id: id } }); }),
    deleteCourse: (id) => __awaiter(void 0, void 0, void 0, function* () { return prisma_1.prisma.course.delete({ where: { id: id } }); }),
    coursePurchaseCreate: (data) => __awaiter(void 0, void 0, void 0, function* () { return prisma_1.prisma.coursePurchase.create({ data }); }),
    coursePurchaseDelete: (id) => __awaiter(void 0, void 0, void 0, function* () { return prisma_1.prisma.coursePurchase.delete({ where: { id: id } }); }),
    coursePurchaseUpdate: (data, id) => __awaiter(void 0, void 0, void 0, function* () { return prisma_1.prisma.coursePurchase.update({ where: { id: id }, data }); }),
};

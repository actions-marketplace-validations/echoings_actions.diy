"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const hash_1 = require("./hash");
ava_1.default('sha256', async (t, input, expected) => {
    t.is(await hash_1.sha256(input), expected);
    t.is(hash_1.sha256Native(input), expected);
}, 'test', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9oYXNoLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBdUI7QUFFdkIsaUNBQThDO0FBRTlDLGFBQUksQ0FDRixRQUFRLEVBQ1IsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxFQUFFO0lBQzNDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxhQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsRUFDRCxNQUFNLEVBQ04sa0VBQWtFLENBQ25FLENBQUMifQ==
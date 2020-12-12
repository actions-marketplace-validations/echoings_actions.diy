"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const artifact = __importStar(require("@actions/artifact"));
const cache = __importStar(require("@actions/cache"));
const core = __importStar(require("@actions/core"));
const exec = __importStar(require("@actions/exec"));
const github = __importStar(require("@actions/github"));
const glob = __importStar(require("@actions/glob"));
const io = __importStar(require("@actions/io"));
const toolCache = __importStar(require("@actions/tool-cache"));
const axios_1 = __importDefault(require("axios"));
const diy_1 = __importDefault(require("./diy"));
async function run() {
    try {
        const diy = new diy_1.default(github.context);
        const { GITHUB_WORKSPACE: sourceDir = '' } = process.env;
        const actionFn = require(path_1.default.join(sourceDir, '.echo.actions.diy.js'));
        const msg = await actionFn.call(diy, {
            envs: process.env,
        }, {
            axios: axios_1.default,
            core,
            github,
            exec,
            glob,
            cache,
            io,
            toolCache,
            artifact,
        });
        core.setOutput('msg', `${new Date() + ': ' + msg}`);
    }
    catch (error) {
        core.setFailed(error);
    }
}
void run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBRXhCLDREQUE4QztBQUM5QyxzREFBd0M7QUFDeEMsb0RBQXNDO0FBQ3RDLG9EQUFzQztBQUN0Qyx3REFBMEM7QUFDMUMsb0RBQXNDO0FBQ3RDLGdEQUFrQztBQUNsQywrREFBaUQ7QUFDakQsa0RBQTBCO0FBRTFCLGdEQUF3QjtBQUV4QixLQUFLLFVBQVUsR0FBRztJQUNoQixJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQUcsSUFBSSxhQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUV6RCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sR0FBRyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FDN0IsR0FBRyxFQUNIO1lBQ0UsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHO1NBQ2xCLEVBQ0Q7WUFDRSxLQUFLLEVBQUwsZUFBSztZQUNMLElBQUk7WUFDSixNQUFNO1lBQ04sSUFBSTtZQUNKLElBQUk7WUFDSixLQUFLO1lBQ0wsRUFBRTtZQUNGLFNBQVM7WUFDVCxRQUFRO1NBQ1QsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ3JEO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQztBQUVELEtBQUssR0FBRyxFQUFFLENBQUMifQ==
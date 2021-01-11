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
const fs_extra_1 = __importDefault(require("fs-extra"));
const form_data_1 = __importDefault(require("form-data"));
const diy_1 = __importDefault(require("./diy"));
async function run() {
    try {
        const diy = new diy_1.default(github.context);
        const { GITHUB_WORKSPACE: sourceDir = '' } = process.env;
        const actionFn = require(path_1.default.join(sourceDir, '.echo.actions.diy.js'));
        const msg = await actionFn.call(diy, {
            envs: process.env,
            ctx: github.context,
        }, {
            axios: axios_1.default,
            FormData: form_data_1.default,
            core,
            github,
            fs: fs_extra_1.default,
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
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBRXhCLDREQUE4QztBQUM5QyxzREFBd0M7QUFDeEMsb0RBQXNDO0FBQ3RDLG9EQUFzQztBQUN0Qyx3REFBMEM7QUFDMUMsb0RBQXNDO0FBQ3RDLGdEQUFrQztBQUNsQywrREFBaUQ7QUFDakQsa0RBQTBCO0FBQzFCLHdEQUEwQjtBQUMxQiwwREFBaUM7QUFFakMsZ0RBQXdCO0FBRXhCLEtBQUssVUFBVSxHQUFHO0lBQ2hCLElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRXpELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDdkUsTUFBTSxHQUFHLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUM3QixHQUFHLEVBQ0g7WUFDRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDakIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1NBQ3BCLEVBQ0Q7WUFDRSxLQUFLLEVBQUwsZUFBSztZQUNMLFFBQVEsRUFBUixtQkFBUTtZQUNSLElBQUk7WUFDSixNQUFNO1lBQ04sRUFBRSxFQUFGLGtCQUFFO1lBQ0YsSUFBSTtZQUNKLElBQUk7WUFDSixLQUFLO1lBQ0wsRUFBRTtZQUNGLFNBQVM7WUFDVCxRQUFRO1NBQ1QsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ3JEO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3ZCO0FBQ0gsQ0FBQztBQUVELEdBQUcsRUFBRSxDQUFDIn0=
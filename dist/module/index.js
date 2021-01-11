import path from 'path';
import * as artifact from '@actions/artifact';
import * as cache from '@actions/cache';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import * as github from '@actions/github';
import * as glob from '@actions/glob';
import * as io from '@actions/io';
import * as toolCache from '@actions/tool-cache';
import axios from 'axios';
import fs from 'fs-extra';
import FormData from 'form-data';
import DIY from './diy';
async function run() {
    try {
        const diy = new DIY(github.context);
        const { GITHUB_WORKSPACE: sourceDir = '' } = process.env;
        const actionFn = require(path.join(sourceDir, '.echo.actions.diy.js'));
        const msg = await actionFn.call(diy, {
            envs: process.env,
            ctx: github.context,
        }, {
            axios,
            FormData,
            core,
            github,
            fs,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRXhCLE9BQU8sS0FBSyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxLQUFLLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sS0FBSyxJQUFJLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xDLE9BQU8sS0FBSyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMxQixPQUFPLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFFakMsT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDO0FBRXhCLEtBQUssVUFBVSxHQUFHO0lBQ2hCLElBQUk7UUFDRixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsR0FBRyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBRXpELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDdkUsTUFBTSxHQUFHLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxDQUM3QixHQUFHLEVBQ0g7WUFDRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUc7WUFDakIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxPQUFPO1NBQ3BCLEVBQ0Q7WUFDRSxLQUFLO1lBQ0wsUUFBUTtZQUNSLElBQUk7WUFDSixNQUFNO1lBQ04sRUFBRTtZQUNGLElBQUk7WUFDSixJQUFJO1lBQ0osS0FBSztZQUNMLEVBQUU7WUFDRixTQUFTO1lBQ1QsUUFBUTtTQUNULENBQ0YsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUNyRDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2QjtBQUNILENBQUM7QUFFRCxHQUFHLEVBQUUsQ0FBQyJ9
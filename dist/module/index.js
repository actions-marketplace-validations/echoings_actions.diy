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
import DIY from './diy';
async function run() {
    try {
        const diy = new DIY(github.context);
        const { GITHUB_WORKSPACE: sourceDir = '' } = process.env;
        const actionFn = require(path.join(sourceDir, '.echo.actions.diy.js'));
        const msg = await actionFn.call(diy, {
            envs: process.env,
        }, {
            axios,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFJLE1BQU0sTUFBTSxDQUFDO0FBRXhCLE9BQU8sS0FBSyxRQUFRLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxLQUFLLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssSUFBSSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEtBQUssTUFBTSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sS0FBSyxJQUFJLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xDLE9BQU8sS0FBSyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE9BQU8sR0FBRyxNQUFNLE9BQU8sQ0FBQztBQUV4QixLQUFLLFVBQVUsR0FBRztJQUNoQixJQUFJO1FBQ0YsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEdBQUcsRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUV6RCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sR0FBRyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FDN0IsR0FBRyxFQUNIO1lBQ0UsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHO1NBQ2xCLEVBQ0Q7WUFDRSxLQUFLO1lBQ0wsSUFBSTtZQUNKLE1BQU07WUFDTixJQUFJO1lBQ0osSUFBSTtZQUNKLEtBQUs7WUFDTCxFQUFFO1lBQ0YsU0FBUztZQUNULFFBQVE7U0FDVCxDQUNGLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDckQ7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkI7QUFDSCxDQUFDO0FBRUQsS0FBSyxHQUFHLEVBQUUsQ0FBQyJ9
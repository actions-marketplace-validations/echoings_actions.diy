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

async function run(): Promise<void> {
  try {
    const diy = new DIY(github.context);
    const { GITHUB_WORKSPACE: sourceDir = '' } = process.env;

    const actionFn = require(path.join(sourceDir, '.echo.actions.diy.js'));
    const msg = await actionFn.call(
      diy,
      {
        envs: process.env,
      },
      {
        axios,
        core,
        github,
        exec,
        glob,
        cache,
        io,
        toolCache,
        artifact,
      },
    );

    core.setOutput('msg', `${new Date() + ': ' + msg}`);
  } catch (error) {
    core.setFailed(error);
  }
}

void run();

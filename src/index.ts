import core from '@actions/core'
import github from '@actions/github'
import axios from 'axios'
import path from 'path'

async function run() {
  try {
    const { GITHUB_WORKSPACE: sourceDir = '' } = process.env
    const actionFn = require(path.join(sourceDir, '.echo.actions.diy.js'))
    const msg = await actionFn.call(null, github.context, process.env, axios, core)

    core.setOutput('msg', `${new Date() + ': ' + msg}`)
  } catch (error) {
    core.setFailed(error)
  }
}

void run()

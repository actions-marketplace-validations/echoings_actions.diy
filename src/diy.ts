import { Context } from '@actions/github/lib/context';
export default class DIY {
  ctx: Context;
  ctxFormatContent: any;
  constructor(ctx: Context) {
    this.ctx = ctx;
    this.init();
  }

  init() {
    const { ref, actor, workflow, eventName, sha, payload } = this.ctx;
    const { commits = [], comment, repository } = payload;

    const commitsContent: string[] = [];
    commits.map((item: any) => commitsContent.push(item.message));
    const actionUrl = `${repository?.html_url}/commit/${sha}/checks/${workflow}`;

    this.ctxFormatContent = {
      ref,
      actor,
      workflow,
      eventName,
      sha,
      payload,
      comment,
      commitsContent: commitsContent.join('\n'),
      actionUrl,
      repository,
    };
  }
}

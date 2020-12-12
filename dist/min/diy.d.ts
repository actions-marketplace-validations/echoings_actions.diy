import { Context } from '@actions/github/lib/context';
export default class DIY {
    ctx: Context;
    ctxFormatContent: any;
    constructor(ctx: Context);
    init(): void;
}

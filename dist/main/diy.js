"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DIY {
    constructor(ctx) {
        this.ctx = ctx;
        this.init();
    }
    init() {
        const { ref, actor, workflow, eventName, sha, payload } = this.ctx;
        const { commits = [], comment, repository } = payload;
        const commitsContent = [];
        commits.map((item) => commitsContent.push(item.message));
        const actionUrl = `${repository === null || repository === void 0 ? void 0 : repository.html_url}/commit/${sha}/checks/${workflow}`;
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
exports.default = DIY;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGl5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RpeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLE1BQXFCLEdBQUc7SUFHdEIsWUFBWSxHQUFZO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUk7UUFDRixNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFBO1FBQ2xFLE1BQU0sRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUE7UUFFckQsTUFBTSxjQUFjLEdBQWEsRUFBRSxDQUFBO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDN0QsTUFBTSxTQUFTLEdBQUcsR0FBRyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSxXQUFXLEdBQUcsV0FBVyxRQUFRLEVBQUUsQ0FBQTtRQUU1RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDdEIsR0FBRztZQUNILEtBQUs7WUFDTCxRQUFRO1lBQ1IsU0FBUztZQUNULEdBQUc7WUFDSCxPQUFPO1lBQ1AsT0FBTztZQUNQLGNBQWMsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QyxTQUFTO1lBQ1QsVUFBVTtTQUNYLENBQUE7SUFDSCxDQUFDO0NBQ0Y7QUE3QkQsc0JBNkJDIn0=
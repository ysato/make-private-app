import {Context} from "probot";
import {Config, defaults} from "./config";

export async function handleRepositoryPublicized(context: Context<'repository'>): Promise<void> {
    const config = await context.config<Config>('make-private.yml', defaults);

    if (!config) {
        throw new Error('the configuration file failed to load');
    }

    context.log(context.payload);

    if (context.payload.repository.private) {
        return;
    }

    if (config.disable.includes('repository')) {
        return;
    }

    await context.octokit.repos.update({
        ...context.repo(),
        private: true
    });

    await context.octokit.issues.create({
        ...context.repo(),
        title: 'This repository has been converted to private by Make Private App.',
        body: `NOTE: This repository was automatically converted to private! 
To disable this setting, create/modify \`.github/make-private.yml\` as below.

\`\`\`yml
disable:
  - repository
\`\`\``,
        assignee: context.payload.sender.login
    });
}

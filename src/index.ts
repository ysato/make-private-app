import {Probot} from "probot";
import {handleRepositoryPublicized} from "./handle-repository-publicized";

export = (app: Probot) => {
    app.on(["repository.created", "repository.publicized"], handleRepositoryPublicized);
};

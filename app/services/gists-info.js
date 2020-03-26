import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GistsInfoService extends Service {

    get numberOfGists()
    {
        return this.gists.length;
    }

    @tracked gists = [
        {
            filename : "example.hbs",
            description: "Just an example",
            body: "<p>My body <strong>example</strong></p> for {{username}}"
        },
        {
            filename : "examplev2.hbs",
            description: "Just an example v2",
            body: "<p>My body <strong>example</strong></p> for {{username}} v2"
        }
    ]

    addGist(gist)
    {
        this.gists.addObject(gist);
    }
}

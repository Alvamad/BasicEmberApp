import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object"

export default class AddGistComponent extends Component {
    
    @tracked body;
    @tracked description;
    @tracked filename;

    @action
    updateBody(event)
    {
        this.body = event.target.value;
    };

    @action
    updateDescription(event)
    {
        this.description = event.target.value;
    };   
    
    @action
    updateFileName(event)
    {
        this.filename = event.target.value;
    };
}

import Controller from '@ember/controller';
import { action } from "@ember/object"
import { inject as service } from "@ember/service"

export default class AddGistController extends Controller {
    
    @service gistsInfo;

    @action
    addFile(body, description, filename){
        this.gistsInfo.addGist({body, description, filename})
        this.transitionToRoute('index')
    };
}

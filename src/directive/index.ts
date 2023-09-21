import type {App, Directive} from 'vue'
import myText from "./modules/text";
import height from "./modules/height";
import auth from './modules/auth';

const directiveList: {[key:string] : Directive} = {
    myText,
    height,
    auth
}

const directives = {
    install(app:App<Element>) {
        Object.keys(directiveList).forEach((key) => {
            app.directive(key, directiveList[key])
        })
    }
}

export default directives;
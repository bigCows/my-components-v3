import type { Directive,DirectiveBinding } from 'vue'

const btnAuthList = ['btnAuth1', 'btnAuth2', 'btnAuth3']
const auth: Directive = {
    mounted(el:HTMLElement, binding:DirectiveBinding) {
        const { value } = binding;
        if(Array.isArray(value) && value.length) {
            value.forEach(item => btnAuthList.includes(item) || el.remove())
        } else {
            btnAuthList.includes(value) || el.remove();
        }
    }
}

export default auth;
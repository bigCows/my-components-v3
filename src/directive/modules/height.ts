import type { Directive,DirectiveBinding } from 'vue'

const height:Directive =  {
    mounted(el:HTMLElement, binding:DirectiveBinding, vnode, preVnode) {
       console.log('123');
       console.log(binding, 'binding11111111');
       
    el.style.height = binding.value + 'px'
    el.style.width = binding.value + 'px'
    el.innerText = binding.value + 'px'
    el.style.border = 'dashed red' 
   }  
}

export default height;

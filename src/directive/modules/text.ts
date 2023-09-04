import type { Directive,DirectiveBinding } from 'vue'

const myText:Directive =  {
    mounted(el:HTMLElement, binding:DirectiveBinding, vnode, preVnode) {
    console.log(binding, 'binding');
   //  console.log(vnode, 'vnode');
   //  console.log(preVnode, 'preVnode');
    
   //  el.style.height = binding.value + 'px'
   //  el.innerText = binding.value + 'px' 
    el.innerText = binding.value ? binding.value.name.split('').reverse().join('') : '无法识别';
       }  
}

   export default myText;
import type { Directive,DirectiveBinding } from 'vue'

const myText:Directive =  {
  mounted(el:HTMLElement, binding:DirectiveBinding) {
  //  el.style.height = binding.value + 'px'
  //  el.innerText = binding.value + 'px' 
    el.innerText = binding.value ? binding.value.name.split('').reverse().join('') : '无法识别';
  }  
}

export default myText;
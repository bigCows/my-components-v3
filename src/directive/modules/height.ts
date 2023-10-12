
import type { Directive,DirectiveBinding } from 'vue'

const height:Directive = {
  mounted(el:HTMLElement, binding:DirectiveBinding) {
    el.style.width = binding.value + 'px'
    el.innerText = binding.value + 'px'
    el.style.height = binding.value + 'px'
    el.style.border = 'dashed red' 
  }  
}

export default height;
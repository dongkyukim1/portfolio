export default {
    mounted(el, binding) {
        el.setAttribute('data-tooltip', binding.value)
        el.classList.add('tooltip-trigger')
    }
}
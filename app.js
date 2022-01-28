// vue link
// http://v3.vuejs.org

// cat image
// https://cataas.com/cat?type=sq

// create colors array
const colors = [
  'blue',
  'red',
  'black',
  'green',
  'brown'
]

// Create application
const app = Vue.createApp({
  data: function () {
    return {
      title: 'Hello Vue!',
      link: 'http://v3.vuejs.org',
      cat: 'https://cataas.com/cat?type=sq',
      colors: colors,
      bcolors: colors.filter(color =>
        color.startsWith('b'))
    }
  }
})

// mount to HTML
const vm = app.mount('#app')

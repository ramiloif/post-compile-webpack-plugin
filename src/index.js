module.exports = class PostCompile {
  constructor(fn) {	  constructor(fn, options = {onlyFirstTime: false}) {
    this.fn = fn	    this.fn = fn
    this.isFirstCompile = true
    this.options = options
  }	  }


  apply(compiler) {	  apply(compiler) {
    const handler = stats => {	    
      const handler = stats => {
      if (this.options.onlyFirstTime && !this.isFirstCompile) {
        return
      }
      if (typeof this.fn === 'function') {	      if (typeof this.fn === 'function') {
        this.fn(stats)	        this.fn(stats)
        this.isFirstCompile = false
      }	      }
    }	    
    
  }

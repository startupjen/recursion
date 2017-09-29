// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

let stringifyJSON = (obj) => {

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return `${obj}`

  } else if (typeof obj === 'string') {
    return `"${obj}"`

  } else if ( Array.isArray(obj) ) {
    let result = ''
    for (let i = 0;i < obj.length; i++) {
      if (i === 0) { result += stringifyJSON(obj[i]) }
      else { result += `,${stringifyJSON(obj[i])}` }
    }
    return `[${result}]`

  } else {
    let result = ''
    let count = 0
    
    for (key in obj) {
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') { 
        if (count===0) { result += `${stringifyJSON(key)}:${stringifyJSON(obj[key])}` }
        else { result += `,${stringifyJSON(key)}:${stringifyJSON(obj[key])}` }
      }
      count++
    }
    return `{${result}}`
  }
};

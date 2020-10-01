
exports.min = function min (array = []) {
  let min = array[0];

  if(array.length === 0) return 0

  for(let i = 0; i < array.length; i++)
  {
    
    if(array[i] < min)
    {
      min = array[i]
    }
  }

  return min
}

exports.max = function max (array = []) {
  let max = array[0];

  if(array.length === 0) return 0

  for(let i = 0; i < array.length; i++)
  {
    if(array[i] > max)
    {
      max = array[i]
    }
  }
  return max
}

exports.avg = function avg (array = []) {
  let sum = 0
  let result = 0

  if(array.length === 0) return 0

  for(let i = 0; i < array.length; i++)
  {
    sum += array[i]
  }

  result = sum / array.length;
  return result
}
export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function changeId(id){
  if(id <= 9){
    return  `#00${id}`
  } else if(id <= 99){
    return  `#0${id}`
  } else if(id > 99 ){
    return `#${id}`
  }
}

export function changeHeight(height){
    let newHeight
    let heightMeters = height / 10;
    let heightFt = heightMeters / 0.3048
    let unity = `${heightFt}`.slice(0,1)
    let dec = `${heightFt}`.slice(2,3)
    return newHeight = `${unity}'${dec}'' (${heightMeters}m)`
}

export function changeWeight(weight){
    let weightKg = weight / 10
    let weightLbs = weightKg * 2.20462
    let index = `${weightLbs}`.indexOf(".", 0)
    let newWeight = `${weightLbs}`.slice(0, index + 3)
    return `${newWeight} lbs (${weightKg}kg)`
}
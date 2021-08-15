export const findIndex = (array, value) => {
    for(let i = 0; i < array.length; i += 1) {
        if(array[i]["name"] === value) {
            return i;
        }
    }
  }
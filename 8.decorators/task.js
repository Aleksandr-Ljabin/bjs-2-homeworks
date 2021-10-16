function cachingDecoratorNew(func) {
  // Ваш код


  
    let cache = {};
    function wrapper(...args) {
      const hash = args.join(',');
      if (hash in cache) {
        console.log("Из кеша: " + cache[hash]);
      } else if(cache.length >= 5){
        cache.shift();
        let result = func(...args);
        cache[hash] = cache[hash].push(result);
        console.log("Вычисляем: " + result); 
      }


      else {
          let result = func(...args);
          cache[hash] = cache[hash].push(result);
          console.log("Вычисляем: " + result); 
        }
    }
    return wrapper;
  


}


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}

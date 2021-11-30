const mainItem = document.querySelector('main_cat cat_item');
    const orders = document.querySelector('.product #data')

    mainItem.forEach(li => {
        cat_item.onclick = function() {
         //active
         mainItem.forEach(li => {
            cat_item.className = "";
         })
         cat_item.className = "active";
   
         //Filter
         const value = cat_item.textContent;
         orders.forEach(img => {
             img.style.display = 'none';
             if (img.getAttribute('data-filter') == value.toLowerCase() || value == "All Menu") {
                 img.style.display = 'block';
             }
         })
        }
     });
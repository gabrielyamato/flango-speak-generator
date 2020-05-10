const words_data = { 
    "column_1": ['integrated', 'total', 'systematized'],
    "column_2": ['Management', 'Organizational', 'Monitored'],
    "column_3": ['Options', 'Flexibility', 'Capability'] 
}


module.exports.random_generator= function random_generator(){
   var result = []
    for (var key of Object.keys(words_data)) {
        result.push(words_data[key] [Math.round(Math.random()*(2-0) + 0)])
    }
   return result
}
 


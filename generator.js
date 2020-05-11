const words_data = { 
    "column_1": ['integrated', 'total', 'systematized', 'parallel', 'functional', 'responsive','optimal','synchronized','compatible','balanced'],
    "column_2": ['management', 'organizational', 'monitored','reciprocal','digital','logistical','transitional','incremental','third-generation','policy'],
    "column_3": ['options', 'flexibility', 'capability','mobility','programming','concept','time-phase','projection','hardware','contigency'] 
}


module.exports.random_generator= function random_generator(){
   var result = []
    for (var key of Object.keys(words_data)) {
        result.push(words_data[key][Math.floor(Math.random() * (10))])
    }
   return result
}
 


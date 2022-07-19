/**
 *  Retorna la última fila de un rango de columnas
 *
 *  @param {ws} input de la hoja
 *  @param {col1} letra de la primera columna
 *  @param {col2} letra de la segunda columna
 *  @return el número de la última fila
 *
 */
 function getLastRowSpecial(ws,col1,col2){
    let lastRow = ws.getLastRow()
    let range = ws.getRange(1,col1,lastRow,col2).getValues()
    var rowNum = range.length-1;
    var blank = false;
    for(var row = range.length-1; row > 0; row--){
        if(range[row][0] === "" && !blank){
        rowNum = row;
        blank = false;
        }else if(range[row][0] !== ""){
        blank = true;
        };
    };
    return rowNum+1;
};

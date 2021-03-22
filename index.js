module.exports.removeObjectFromTree = async function(optionsObj){
	let treedata =  optionsObj.treeObj;
	let removeChild = optionsObj.removeArray;
	let uniqueId = optionsObj.uniqueKey;
	
	treedata.data = treedata.data
      .filter(function(child){ 
      	return removeChild.indexOf(child[uniqueId]) == -1
      })
      .map(function(child){
      	if(child.data){ 
			let obj= {
				"treeObj": child,
				"removeArray": removeChild,
				"uniqueKey" : uniqueId
			};
			return removeObjectFromTree(obj)
      	} 
  	});
  	return treedata;
}
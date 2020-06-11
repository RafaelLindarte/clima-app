
const lugarinfo = require('/home/rafael/curso-node/clima-app/lugar');
const climainfo = require('/home/rafael/curso-node/clima-app/clima');
const argv = require('yargs').option({

	direccion:{

		alias: 'd',
		desc: 'Direccion de la ciudad para obtener el clima',
		demand: true	
	}
}).argv;
console.log(argv.direccion);

//lugarinfo.getlugarLatLng(argv.direccion)
//	.then(console.log);

//climainfo.getClima(40.750000 , -74.000000)
//	.then( console.log )
//	.catch();




const getInfo = async (direccion) => {
	
	try{
		const coords = await lugarinfo.getlugarLatLng(direccion);
		const temp = await climainfo.getClima( coords.lat , coords.lng);
		return `EL clima de ${coords.direccion} es de ${temp}`;
	}
	catch(e) {
		return `no se pudo determinar el clima de ${direccion}`;
	}
	

}


getInfo(argv.direccion)
	.then(console.log)
	.catch(console.log);


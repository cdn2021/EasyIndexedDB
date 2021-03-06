var db = {};
db.read = function (databaseName,version,table,key,...callback) {
	let request = window.indexedDB.open(databaseName,version);
	request.onerror = function (event) {
		console.log(event);
		let obj = {};
		obj.status = "error";
		obj.err = event;
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	var db2;
	request.onupgradeneeded = function (event) {
		let obj = {};
		obj.status = "error";
		console.log("Upgradeneeded the database.");
		console.log(event);
		obj.err = event;
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	request.onsuccess = function (event) {
		db2 = request.result;
		let result = db2.transaction([table]).objectStore(table).get(key);
		result.onerror = function (event) {
			let obj = {};
			obj.status = "error";
			obj.err = event;
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
		};
		result.onsuccess = function (event) {
			if (result.result) {
				let obj = {};
				obj.result = result.result;
				obj.status = "success";
				if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
			} else {
				let obj = {};
				obj.status = "error";
				obj.err = "No data was obtained";
				if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
			}
		};
	};
};
db.newtable = function (databaseName,version,table,key,...callback) {
	let request = window.indexedDB.open(databaseName,version);
	request.onerror = function (event) {
		console.log(event);
		let obj = {};
		obj.status = "error";
		obj.err = event;
if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	var db2;
	request.onupgradeneeded = function (event) {
		db2 = event.target.result;
		let objStore;
		if (!db2.objectStoreNames.contains(table)) {
			let obj = {};
			obj.result = db2.createObjectStore(table,{"keyPath":key});
			obj.status = "success";
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
		} else {
			let obj = {};
			obj.err = "The table was created.";
			obj.status = "error";
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
		}
	};
	request.onsuccess = function (event) {
		db2 = request.result;
		let objStore;
		if (!db2.objectStoreNames.contains(table)) {
			let obj = {};
			obj.result = db2.createObjectStore(table,{"keyPath":key});
			obj.status = "success";
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
		} else {
			let obj = {};
			obj.err = "The table was created.";
			obj.status = "error";
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
		}
	};
};
db.add = function (databaseName,version,table,data,...callback) {
	let request = window.indexedDB.open(databaseName,version);
	request.onerror = function (event) {
		console.log(event);
		let obj = {};
		obj.status = "error";
		obj.err = event;
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	request.onupgradeneeded = function (event) {
		let obj = {};
		obj.status = "error";
		obj.err = event;
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	request.onsuccess = function (event) {
		db2 = request.result;
		let pro = db2.transaction([table],'readwrite').objectStore(table).add(data);
		pro.onsuccess = function (event) {
			let obj = {};
			obj.status = "success";
			obj.result = event;
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
		};
		pro.onerror = function (event) {
			let obj = {};
			obj.status = "error";
			obj.err = event;
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
		};
	};
};
db.readall = function (databaseName,version,table,...callback) {
	let request = window.indexedDB.open(databaseName,version);
	request.onerror = function (event) {
		console.log(event);
		let obj = {};
		obj.status = "error";
		obj.err = event;
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	request.onupgradeneeded = function (event) {
		let obj = {};
		obj.status = "error";
		obj.err = event;
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	request.onsuccess = function (event) {
		db2 = request.result;
		let arr = [];
		let objStore = db2.transaction(table).objectStore(table);
		objStore.openCursor().onsuccess = function (event) {
			let cursor = event.target.result;
			if (cursor) {
				arr[arr.length] = cursor;
				cursor.continue();
			} else {
				let obj = {};
				obj.result = arr;
				obj.status = "success";
				if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
			};
		};
	};
};
db.status = function (databaseName,version,table,data,...callback) {
	let request = window.indexedDB.open(databaseName,version);
	request.onerror = function (event) {
		console.log(event);
		let obj = {};
		obj.status = "error";
		obj.err = event;
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	request.onupgradeneeded = function (event) {
		let obj = {};
		obj.status = "error";
		obj.err = event;
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	request.onsuccess = function (event) {
		db2 = request.result;
		let pro = db2.transaction([table],'readwrite').objectStore(table).put(data);
		pro.onsuccess = function (event) {
			let obj = {};
			obj.status = "success";
			obj.result = event;
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
		};
		pro.onerror = function (event) {
			let obj = {};
			obj.status = "error";
			obj.err = event;
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
		};
	};
};
db.remove = function(databaseName,version,table,key,...callback)
{
	let request = window.indexedDB.open(databaseName,version);
	request.onerror = function (event) {
		console.log(event);
		let obj = {};
		obj.status = "error";
		obj.err = event;
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	request.onupgradeneeded = function (event) {
		let obj = {};
		obj.status = "error";
		obj.err = event;
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	request.onsuccess = function (event) {
		db2 = request.result;
		let stat = db2.transaction([table],'readwrite').objectStore(table).delete(key);
		stat.onsuccess = function (event) {
			let obj = {};
			obj.status = "success";
			obj.result = event;
			if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
		};
	};
};
db.deleteDB = function(databaseName,...callback)
{
	let request = window.indexedDB.deleteDatabase(databaseName);
	request.onerror = function (event) {
		let obj = {};
		obj.err = event;
		obj.status = "error";
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
	request.onsuccess = function (event) {
		let obj = {};
		obj.result = event;
		obj.status = "success";
		if (typeof callback != "undefined") { eval(callback[0] + "(" + JSON.stringify(obj) + ")"); }
	};
};
db.help = function()
{
	window.open("https://cdn2021.github.io/EasyIndexedDB/help");
};

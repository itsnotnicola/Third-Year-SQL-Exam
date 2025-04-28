/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4wrac69ch0m8ypx",
    "created": "2024-11-05 12:11:58.109Z",
    "updated": "2024-11-05 12:11:58.109Z",
    "name": "Order",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "odvvdfov",
        "name": "ord_num",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "r6fpcjaz",
        "name": "ord_status",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4wrac69ch0m8ypx");

  return dao.deleteCollection(collection);
})

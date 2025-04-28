/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ms8t20pj0jq7u0c",
    "created": "2024-11-05 12:12:52.641Z",
    "updated": "2024-11-05 12:12:52.641Z",
    "name": "Ordered_Product",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "r1ugjo80",
        "name": "prod_code",
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
        "id": "mgprzcsa",
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
        "id": "vqq8rocz",
        "name": "quantity",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("ms8t20pj0jq7u0c");

  return dao.deleteCollection(collection);
})
